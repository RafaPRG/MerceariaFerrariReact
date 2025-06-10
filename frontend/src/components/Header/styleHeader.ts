import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #f7f3e9;
  border-bottom: 2px solid #d2a27e;
  padding: 0.5rem 1rem;
`;

export const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Logo = styled.img`
  height: 60px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #7b4e13;
  font-family: 'Georgia', serif;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: 0.2s;

  &:hover {
    color: #e22727;
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const AuthButton = styled(Link)`
  padding: 0.4rem 1rem;
  border: 2px solid #333;
  background-color: transparent;
  color: #333;
  border-radius: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #ddd;
  }
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-weight: bold;
    color: #7c4f1d;
  }

  button {
    padding: 0.4rem 1rem;
    background-color: #e22727;
    color: white;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background-color: #b71c1c;
    }
  }
`;
