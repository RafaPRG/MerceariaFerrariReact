import { createContext, useContext, useState, type ReactNode } from "react";
import { mockUsers } from "../mocks/userMock";
import type { UserProps } from "../types/userType";

interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: UserProps | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null);

  const login = (email: string, password: string): boolean => {
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      if (!user.favorites) user.favorites = [];
      setIsAuthenticated(true);
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const toggleFavorite = (productId: string) => {
    if (!currentUser) return;

    const alreadyFavorited = currentUser.favorites?.includes(productId);
    const updatedFavorites = alreadyFavorited
      ? currentUser.favorites?.filter((id) => id !== productId)
      : [...(currentUser.favorites || []), productId];

    setCurrentUser({ ...currentUser, favorites: updatedFavorites });
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
