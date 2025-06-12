import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "../components/Header/Header";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

const mockNavigate = vi.fn();
const mockLogout = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom") as typeof import("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock("../contexts/AuthContext", async () => {
  const actual = await vi.importActual("../contexts/AuthContext") as typeof import("../contexts/AuthContext");
  return {
    ...actual,
    useAuth: () => ({
      isAuthenticated: true,
      currentUser: { name: "Hafa", favorites: [] },
      logout: mockLogout,
    }),
  };
});

describe("Header", () => {
  it("exibe o nome do usuário logado", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("Olá, Hafa")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sair/i })).toBeInTheDocument();
  });

  it("chama logout e redireciona ao clicar em sair", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const botaoSair = screen.getByRole("button", { name: /sair/i });
    fireEvent.click(botaoSair);

    expect(mockLogout).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
