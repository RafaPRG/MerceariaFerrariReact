import { render, screen } from "@testing-library/react";
import { MainContent } from "../components/MainContent/MainContent";

describe("MainContent", () => {
  it("renderiza corretamente os elementos visuais principais", () => {
    render(<MainContent />);

    expect(screen.getByText("Seja Bem-vindo(a)!")).toBeInTheDocument();

    expect(screen.getByAltText("Fachada da Mercearia")).toBeInTheDocument();
    expect(screen.getByAltText("Cerveja em promoção")).toBeInTheDocument();
    expect(screen.getByAltText("Produtos Gerais")).toBeInTheDocument();
    expect(screen.getByAltText("Legumes e Frutas")).toBeInTheDocument();
    expect(screen.getByAltText("Verduras")).toBeInTheDocument();
  });
});
