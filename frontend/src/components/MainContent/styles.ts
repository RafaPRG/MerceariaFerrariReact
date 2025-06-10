import styled from "styled-components";

export const Main = styled.main`
  background-color: #f4c4a0;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const Card = styled.section`
  background-color: #f8f4e9;
  border-radius: 0.8rem;
  padding: 1.5rem;
  text-align: center;
  max-width: 800px;
  margin-bottom: 2rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h2`
  color: #7b4e13;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const CardText = styled.p`
  color: #333;
`;

export const StoreImage = styled.img`
  width: 100%;
  max-width: 400px;
  margin-top: 1rem;
  border-radius: 0.5rem;
`;

export const PromoImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 1rem;
`;

export const PromoText = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  color: #222;
`;

export const CategoryGrid = styled.section`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CategoryCard = styled.div`
  background-color: #f8d5ad;
  border-radius: 0.8rem;
  padding: 1rem;
  width: 240px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CategoryTitle = styled.h4`
  color: #7b4e13;
  margin-bottom: 0.8rem;
`;

export const CategoryImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;
