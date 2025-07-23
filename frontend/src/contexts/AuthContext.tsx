import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { UserProps } from "../types/userType";
import { authService } from "../services/authService";
import { favoriteService } from "../services/favoriteService";

interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: UserProps | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  toggleFavorite: (productId: string) => Promise<void>;
  isFavorite: (productId: string) => boolean;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      setLoading(true);
      try {
        const token = authService.getToken();
        const userData = authService.getUserData();
        
        if (token && userData) {
          setIsAuthenticated(true);
          setCurrentUser(userData);
          
          // Carregar favoritos do backend
          try {
            const userFavorites = await favoriteService.getUserFavorites();

            
            // Atualizar dados do usuário com favoritos
            const favoriteIds = userFavorites.map(f => f.produto_id);
            const updatedUser = { ...userData, favorites: favoriteIds };
            setCurrentUser(updatedUser);
            authService.setUserData(updatedUser);
          } catch (error) {
            console.error('Erro ao carregar favoritos:', error);
          }
        }
      } catch (error) {
        console.error('Erro na inicialização:', error);
        authService.logout();
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await authService.login({ email, password });
      localStorage.setItem('access_token', response.access_token);
      
      // Converter dados do usuário para o formato esperado
      const user = {
        id: response.user.email, // Usando email como ID temporário
        name: response.user.nome,
        email: response.user.email,
        role: response.user.tipo,
        favorites: [] as string[]
      };
      
      // Buscar favoritos do usuário
      try {
        const userFavorites = await favoriteService.getUserFavorites();
        user.favorites = userFavorites.map(f => f.produto_id);

      } catch (error) {
        console.log('Erro ao buscar favoritos:', error);

      }
      
      setCurrentUser(user);
      setIsAuthenticated(true);
      
      // Salvar dados do usuário no localStorage para persistência
      localStorage.setItem('user_data', JSON.stringify(user));
      
      return true;
    } catch (error) {
      console.error('Erro no login:', error);
      return false;
    }
  };

  const logout = () => {
    authService.logout();
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const toggleFavorite = async (productId: string) => {
    if (!currentUser) {
      console.log('Usuário não logado');
      return;
    }

    console.log('Toggle favorito para produto:', productId);
    console.log('Favoritos atuais:', currentUser.favorites);

    try {
      const isFav = currentUser.favorites?.includes(productId);
      console.log('É favorito?', isFav);
      
      if (isFav) {
        console.log('Removendo favorito...');
        await favoriteService.removeFavorite(productId);
        const updatedFavorites = currentUser.favorites?.filter(id => id !== productId) || [];
        const updatedUser = {
          ...currentUser,
          favorites: updatedFavorites
        };
        setCurrentUser(updatedUser);
        authService.setUserData(updatedUser);
        console.log('Favorito removido com sucesso');
      } else {
        console.log('Adicionando favorito...');
        await favoriteService.addFavorite(productId);
        const updatedFavorites = [...(currentUser.favorites || []), productId];
        const updatedUser = {
          ...currentUser,
          favorites: updatedFavorites
        };
        setCurrentUser(updatedUser);
        authService.setUserData(updatedUser);
        console.log('Favorito adicionado com sucesso');
      }
    } catch (error) {
      console.error('Erro ao alterar favorito:', error);
    }
  };

  const isFavorite = (productId: string) => {
    return currentUser?.favorites?.includes(productId) ?? false;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        login,
        logout,
        toggleFavorite,
        isFavorite,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
