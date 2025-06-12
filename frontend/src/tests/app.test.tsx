// src/tests/main.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { AuthProvider } from "../contexts/AuthContext";

describe("main.tsx", () => {
  it("renderiza o componente App sem erros", () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );

    expect(screen.getAllByText(/Mercearia Ferrari/i).length).toBeGreaterThan(0);
  });
});
