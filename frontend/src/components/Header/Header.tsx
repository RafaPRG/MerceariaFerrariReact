import {
  HeaderWrapper,
  HeaderContainer,
  LogoContainer,
  Logo,
  Title,
  Navigation,
  NavLink,
  AuthButtons,
  AuthButton,
  UserActions,
} from "./styleHeader";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import logo from "../../assets/images/logo.png";

export function Header() {
  const { isAuthenticated, currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer>
          <Link to="/">
            <Logo src={logo} alt="Mercearia Ferrari" />
          </Link>
          <Title>Mercearia Ferrari</Title>
        </LogoContainer>

        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/produtos">Produtos</NavLink>
          <NavLink to="/">Contato</NavLink>
          <NavLink to="/">Nossa História</NavLink>
          <NavLink to="/">Notícias</NavLink>
        </Navigation>

        {isAuthenticated && currentUser ? (
          <UserActions>
            <span>Olá, {currentUser.name}</span>
            <button onClick={handleLogout}>Sair</button>
          </UserActions>
        ) : (
          <AuthButtons>
            <AuthButton to="/login">ENTRAR</AuthButton>
            <AuthButton to="/cadastro">CADASTRAR</AuthButton>
          </AuthButtons>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
}
