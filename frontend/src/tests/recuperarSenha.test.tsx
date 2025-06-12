import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen, fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RecuperarSenha } from "../pages/recuperarSenha";
import { mockUsers } from "../mocks/userMock";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

describe("RecuperarSenha", () => {
  beforeEach(() => {
    const user = mockUsers.find((u) => u.email === "admin@merceariaferrari.com");
    if (user) user.password = "admin123";
  });

  it("renderiza os campos corretamente", () => {
    render(<RecuperarSenha />, { wrapper: BrowserRouter });

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Nova Senha")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Redefinir Senha/i })).toBeInTheDocument();
  });

  it("exibe mensagem de sucesso ao redefinir senha de usuário existente", () => {
    render(<RecuperarSenha />, { wrapper: BrowserRouter });

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "admin@merceariaferrari.com" },
    });

    fireEvent.change(screen.getByLabelText("Nova Senha"), {
      target: { value: "novaSenha123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Redefinir Senha/i }));

    expect(screen.getByText("Senha redefinida com sucesso!")).toBeInTheDocument();
  });

  it("exibe mensagem de erro se o e-mail não existir", () => {
    render(<RecuperarSenha />, { wrapper: BrowserRouter });

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "naoexiste@email.com" },
    });

    fireEvent.change(screen.getByLabelText("Nova Senha"), {
      target: { value: "qualquercoisa" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Redefinir Senha/i }));

    expect(screen.getByText("E-mail não encontrado.")).toBeInTheDocument();
  });
});
