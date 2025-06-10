// styleProdutos.ts
import styled from "styled-components";

export const Main = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 12px;
`;

export const TopSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-bottom: 32px;

  button {
    background: #fff;
    border: none;
    border-radius: 22px;
    padding: 8px 20px;
    font-size: 1em;
    color: #7c4f1d;
    box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.07);
    cursor: pointer;
    transition: background 0.15s, color 0.15s;

    &:hover {
      background: #f6c6a7;
      color: #e22727;
    }
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 24px;
  padding: 4px 16px;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.07);
  border: 1.5px solid #e5c7a2;

  input {
    border: none;
    outline: none;
    background: transparent;
    font-size: 1.1em;
    padding: 8px;
    width: 180px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding-right: 6px;
  }

  img {
    width: 22px;
    height: 22px;
    opacity: 0.7;
  }

  img:last-of-type {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

export const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 28px;
`;

export const ProductCard = styled.article`
  background: #f6f1e5;
  border-radius: 16px;
  box-shadow: 0 2px 8px -2px rgba(124, 79, 29, 0.13);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 10px;
  min-height: 230px;
  transition: transform 0.2s, box-shadow 0.2s;

  img {
    width: 90px;
    margin-bottom: 12px;
    border-radius: 8px;
    background: #f6f1e5;
    box-shadow: 0 1px 4px -2px #e5c7a2;
    object-fit: contain;
  }

  p:first-of-type {
    font-size: 1.08em;
    color: #222;
    text-align: center;
    min-height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p:last-of-type {
    font-size: 1.15em;
    font-weight: bold;
    color: #222;
    text-align: center;
    margin-top: 6px;
  }
`;
