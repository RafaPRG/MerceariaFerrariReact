import { render, screen, fireEvent } from "@testing-library/react";
import { Produtos } from "../components/Produtos/produtos";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

vi.mock("../contexts/AuthContext", async () => {
  const actual = await vi.importActual<typeof import("../contexts/AuthContext")>(
    "../contexts/AuthContext"
  );
  return {
    ...actual,
    useAuth: () => ({
      currentUser: {
        favorites: ["1", "2", "doritos-0"]
      }
    })
  };
});

vi.mock("../components/botaoFavorito/botaoFavorito", () => ({
  BotaoFavorito: () => <button data-testid="botao-favorito">Favorito</button>,
}));

describe("Produtos", () => {
  it("renderiza todos os produtos inicialmente", () => {
    render(
      <MemoryRouter>
        <Produtos />
      </MemoryRouter>
    );

    expect(screen.getByText(/Arroz Coripil/i)).toBeInTheDocument();
    expect(screen.getByText(/Feijão Camil/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Doritos/i).length).toBeGreaterThan(0); // ✅ múltiplos Doritos
  });

  it("mostra apenas os produtos favoritos ao clicar no botão", () => {
    render(
      <MemoryRouter>
        <Produtos />
      </MemoryRouter>
    );

    const botaoFavoritos = screen.getByText(/Produtos Favoritos/i);
    fireEvent.click(botaoFavoritos);

    expect(screen.getByText(/Arroz Coripil/i)).toBeInTheDocument();
    expect(screen.getByText(/Feijão Camil/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Doritos/i).length).toBeGreaterThan(0);
    expect(screen.queryByText(/Milho Verde/i)).not.toBeInTheDocument();
  });
});
