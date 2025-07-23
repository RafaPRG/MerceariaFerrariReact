import { useState, useEffect } from "react";
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
import { productService, type Product } from "../../services/productService";
import type { ProductProps } from "../../types/userType";

import pesquisaIcon from "../../assets/images/ImagemDePesquisa.png";
import filtroIcon from "../../assets/images/filtro.png";

// Imagens de fallback para produtos sem imagem
import arroz from "../../assets/images/ArrozCoripilVerde.png";
import feijao from "../../assets/images/FeijaoCamil.png";
import milho from "../../assets/images/LataDeMilhoOle.png";
import leite from "../../assets/images/LeiteCondensadoItalac.png";
import requeijao from "../../assets/images/requeijão.png";
import brahma from "../../assets/images/BrhmaLatão.png";
import heineken from "../../assets/images/HainikenGarrafa.png";
import doritos from "../../assets/images/Doritos.png";

const fallbackImages = [arroz, feijao, milho, leite, requeijao, brahma, heineken, doritos];

export function Produtos() {
  const { currentUser, loading: authLoading } = useAuth();
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [produtos, setProdutos] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productService.getAllProducts();
        // Mapear produtos do backend para o formato esperado pelo frontend
        const mappedProducts = data.map((product, index) => ({
          id: product.id,
          nome: product.nome,
          preco: product.preco,
          categoria: product.categoria,
          descricao: product.descricao,
          imagem_url: product.imagem_url || fallbackImages[index % fallbackImages.length]
        }));
        setProdutos(mappedProducts);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        setError('Erro ao carregar produtos');
      } finally {
        setLoading(false);
      }
    };

    if (!authLoading) {
      fetchProducts();
    }
  }, [authLoading]);

  const toggleShowFavorites = () => {
    setShowOnlyFavorites((prev) => !prev);
  };

  const produtosFiltrados = showOnlyFavorites && currentUser
    ? produtos.filter((produto) => currentUser.favorites?.includes(produto.id))
    : produtos;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  if (loading || authLoading) {
    return (
      <>
        <Header />
        <Main>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            Carregando produtos...
          </div>
        </Main>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <Main>
          <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
            {error}
          </div>
        </Main>
        <Footer />
      </>
    );
  }

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
              <img 
                src={typeof produto.imagem_url === 'string' ? produto.imagem_url : produto.imagem_url} 
                alt={produto.nome} 
                onError={(e) => {
                  // Fallback para imagem padrão se a imagem não carregar
                  const target = e.target as HTMLImageElement;
                  target.src = fallbackImages[0];
                }}
              />
              <p>{produto.nome}</p>
              <p>{formatPrice(produto.preco)}</p>
            </ProductCard>
          ))}
        </ProductGrid>

        {produtosFiltrados.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            {showOnlyFavorites ? 'Nenhum produto favorito encontrado.' : 'Nenhum produto encontrado.'}
          </div>
        )}
      </Main>

      <Footer />
    </>
  );
}
