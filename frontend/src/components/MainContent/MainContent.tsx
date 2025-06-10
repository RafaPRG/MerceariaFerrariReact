import {
  Main,
  Card,
  CardTitle,
  CardText,
  StoreImage,
  PromoImage,
  PromoText,
  CategoryGrid,
  CategoryCard,
  CategoryTitle,
  CategoryImage
} from "./styles.ts";
import fachada from "../../assets/images/FaixadaDaMercearia.jpg";
import cerveja from "../../assets/images/Itaipava.png";
import produtosGerais from "../../assets/images/ProdutosDoDia.png";
import legumesFrutas from "../../assets/images/Frutas.png";
import verduras from "../../assets/images/Verduras.png";

export function MainContent() {
  return (
    <Main>
      <Card>
        <CardTitle>Seja Bem-vindo(a)!</CardTitle>
        <CardText>Confira nossas ofertas e novidades da semana!</CardText>
        <CardText>Se atente para o horário de funcionamento da Semana Santa.</CardText>
        <CardText>Acompanhe na aba de notícias.</CardText>
        <CardText>Tradição, qualidade e carinho desde 1984.</CardText>
        <StoreImage
          src={fachada}
          alt="Fachada da Mercearia"
        />
      </Card>

      <Card>
        <h3 style={{ color: "#8b0000", fontWeight: "bold", marginBottom: "1rem" }}>
          Promoção da Semana
        </h3>
        <PromoImage
          src={cerveja}
          alt="Cerveja em promoção"
        />
        <PromoText>
          3,50 R$ UN • 473ml • 3 UN por 10,00 R$
        </PromoText>
      </Card>

      <CategoryGrid>
        <CategoryCard>
          <CategoryTitle>Produtos Gerais</CategoryTitle>
          <CategoryImage src={produtosGerais} alt="Produtos Gerais" />
        </CategoryCard>

        <CategoryCard>
          <CategoryTitle>Legumes e Frutas</CategoryTitle>
          <CategoryImage src={legumesFrutas} alt="Legumes e Frutas" />
        </CategoryCard>

        <CategoryCard>
          <CategoryTitle>Verduras</CategoryTitle>
          <CategoryImage src={verduras} alt="Verduras" />
        </CategoryCard>
      </CategoryGrid>
    </Main>
  );
}
