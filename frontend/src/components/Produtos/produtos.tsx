import { useState } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import {
  Main,
  TopSection,
  SearchForm,
  ProductGrid,
  ProductCard,
} from "./styleProdutos";
import { BotaoFavorito } from "../botaoFavorito/botaoFavorito";
import { useAuth } from "../../contexts/AuthContext";

import pesquisaIcon from "../../assets/images/ImagemDePesquisa.png";
import filtroIcon from "../../assets/images/filtro.png";

import arroz from "../../assets/images/ArrozCoripilVerde.png";
import feijao from "../../assets/images/FeijaoCamil.png";
import milho from "../../assets/images/LataDeMilhoOle.png";
import leite from "../../assets/images/LeiteCondensadoItalac.png";
import requeijao from "../../assets/images/requeijão.png";
import brahma from "../../assets/images/BrhmaLatão.png";
import heineken from "../../assets/images/HainikenGarrafa.png";
import doritos from "../../assets/images/Doritos.png";

const produtos = [
  { id: "1", nome: "Arroz Coripil Tipo 1 5kg", preco: "R$ 26,30", imagem: arroz },
  { id: "2", nome: "Feijão Camil 1kg", preco: "R$ 7,00", imagem: feijao },
  { id: "3", nome: "Milho Verde em Lata OLÉ", preco: "R$ 4,69", imagem: milho },
  { id: "4", nome: "Leite Condensado Italac 395g", preco: "R$ 7,71", imagem: leite },
  { id: "5", nome: "Requeijão Vigor 200g", preco: "R$ 6,99", imagem: requeijao },
  { id: "6", nome: "Latão Brahma Chopp 473ml", preco: "R$ 5,99", imagem: brahma },
  { id: "7", nome: "Long Neck Heineken 330ml", preco: "R$ 7,00", imagem: heineken },
  ...Array(8).fill(null).map((_, i) => ({
    id: `doritos-${i}`,
    nome: "Doritos ElmaChips 84g",
    preco: "R$ 9,00",
    imagem: doritos,
  })),
];

export function Produtos() {
  const { currentUser } = useAuth();
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const toggleShowFavorites = () => {
    setShowOnlyFavorites((prev) => !prev);
  };

  const produtosFiltrados = showOnlyFavorites && currentUser
    ? produtos.filter((produto) => currentUser.favorites.includes(produto.id))
    : produtos;

  return (
    <>
      <Header />

      <Main>
        <TopSection>
          <SearchForm>
            <button type="submit">
              <img src={pesquisaIcon} alt="Buscar" />
            </button>
            <input type="text" placeholder="Pesquisar" />
            <img src={filtroIcon} alt="Filtro" />
          </SearchForm>

          <div>
            <button onClick={toggleShowFavorites}>
              {showOnlyFavorites ? "Mostrar Todos" : "Produtos Favoritos"}
            </button>
            <button>Histórico de Compras</button>
          </div>
        </TopSection>

        <ProductGrid>
          {produtosFiltrados.map((produto) => (
            <ProductCard key={produto.id}>
              <BotaoFavorito productId={produto.id} />
              <img src={produto.imagem} alt={produto.nome} />
              <p>{produto.nome}</p>
              <p>{produto.preco}</p>
            </ProductCard>
          ))}
        </ProductGrid>
      </Main>

      <Footer />
    </>
  );
}
