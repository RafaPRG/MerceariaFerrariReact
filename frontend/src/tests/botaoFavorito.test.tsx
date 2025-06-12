import { render, screen, fireEvent } from "@testing-library/react";
import { BotaoFavorito } from "../components/botaoFavorito/botaoFavorito";
import { vi } from "vitest";

const mockToggleFavorite = vi.fn();

vi.mock("../contexts/AuthContext", async () => {
  const actual = await vi.importActual("../contexts/AuthContext") as typeof import("../contexts/AuthContext");
  return {
    ...actual,
    useAuth: () => ({
      isFavorite: (id: string) => id === "favoritado",
      toggleFavorite: mockToggleFavorite,
    }),
  };
});

describe("BotaoFavorito", () => {
  it("mostra estrela cheia se for favorito", () => {
    render(<BotaoFavorito productId="favoritado" />);
    expect(screen.getByText("★")).toBeInTheDocument();
  });

  it("mostra estrela vazia se não for favorito", () => {
    render(<BotaoFavorito productId="nao-favoritado" />);
    expect(screen.getByText("☆")).toBeInTheDocument();
  });

  it("chama toggleFavorite ao clicar", () => {
    render(<BotaoFavorito productId="qualquer-id" />);
    const botao = screen.getByRole("button");
    fireEvent.click(botao);
    expect(mockToggleFavorite).toHaveBeenCalledWith("qualquer-id");
  });
});
