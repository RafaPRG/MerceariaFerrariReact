import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { PrivateRoute } from "../contexts/PrivateRoute";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedComponent = () => <h1>Área Protegida</h1>;
const LoginComponent = () => <h1>Página de Login</h1>;

const renderWithAuth = (isAuthenticated: boolean) => {
  render(
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser: null,
        login: () => true,
        logout: () => {},
        toggleFavorite: () => {},
        isFavorite: () => false,
      }}
    >
      <MemoryRouter initialEntries={["/protegido"]}>
        <Routes>
          <Route
            path="/protegido"
            element={
              <PrivateRoute>
                <ProtectedComponent />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );
};

describe("PrivateRoute", () => {
  it("deve renderizar o componente protegido quando autenticado", () => {
    renderWithAuth(true);
    expect(screen.getByText("Área Protegida")).toBeInTheDocument();
  });

  it("deve redirecionar para o login quando não autenticado", () => {
    renderWithAuth(false);
    expect(screen.getByText("Página de Login")).toBeInTheDocument();
  });
});
