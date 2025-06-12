// src/tests/home.test.tsx
import { render, screen } from "@testing-library/react";
import { Home } from "../pages/home";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";

describe("Home", () => {
  it("renderiza corretamente o conteúdo da página inicial", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Home />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.getAllByText(/Mercearia Ferrari/i)[0]).toBeInTheDocument();

    expect(screen.getByText(/Seja Bem-vindo/i)).toBeInTheDocument();
    expect(screen.getByText(/Promoção da Semana/i)).toBeInTheDocument();
    expect(screen.getByText(/Produtos Gerais/i)).toBeInTheDocument();
    expect(screen.getByText(/Legumes e Frutas/i)).toBeInTheDocument();
    expect(screen.getByText(/Verduras/i)).toBeInTheDocument();

    expect(screen.getByText(/Informações/i)).toBeInTheDocument();
    expect(screen.getByText(/Redes Sociais/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2025 Mercearia Ferrari./i)).toBeInTheDocument();
  });
});
