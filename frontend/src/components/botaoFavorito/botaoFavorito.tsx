import { useAuth } from "../../contexts/AuthContext";
import { FavoriteButton } from "./styleBotaoFavorito";

interface BotaoFavoritoProps {
  productId: string;
}

export function BotaoFavorito({ productId }: BotaoFavoritoProps) {
  const { isFavorite, toggleFavorite } = useAuth();

  const favoritado = isFavorite(productId);

  const handleToggleFavorite = async () => {
    try {
      await toggleFavorite(productId);
    } catch (error) {
      console.error('Erro ao alterar favorito:', error);
    }
  };

  return (
    <FavoriteButton onClick={handleToggleFavorite} $favoritado={favoritado}>
      {favoritado ? "★" : "☆"}
    </FavoriteButton>
  );
}
