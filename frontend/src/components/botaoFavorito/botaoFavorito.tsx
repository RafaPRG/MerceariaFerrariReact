import { useAuth } from "../../contexts/AuthContext";
import { FavoriteButton } from "./styleBotaoFavorito";

interface BotaoFavoritoProps {
  productId: string;
}

export function BotaoFavorito({ productId }: BotaoFavoritoProps) {
  const { isFavorite, toggleFavorite } = useAuth();

  const favoritado = isFavorite(productId);

  return (
    <FavoriteButton onClick={() => toggleFavorite(productId)} $favoritado={favoritado}>
      {favoritado ? "★" : "☆"}
    </FavoriteButton>
  );
}
