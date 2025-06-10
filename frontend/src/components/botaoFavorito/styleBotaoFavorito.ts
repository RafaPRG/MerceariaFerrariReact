import styled from "styled-components";

export const FavoriteButton = styled.button<{ $favoritado: boolean }>`
  background: none;
  border: none;
  font-size: 1.4rem;
  color: ${({ $favoritado }) => ($favoritado ? "#e22727" : "#ccc")};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #e22727;
  }
`;
