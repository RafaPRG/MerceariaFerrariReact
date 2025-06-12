import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import {
  Container,
  Form,
  Logo,
  Fieldset,
  Icon,
  Input,
  Options,
  Checkbox,
  EnterButton,
  SignupText,
  StyledLink,
  BackLink,
} from "./styleLogin";

import logo from "../assets/images/logo.png";
import gmail from "../assets/images/gmail.png";
import senha from "../assets/images/senha.png";

export function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Produtos");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    const success = login(email, password);
    if (success) {
      navigate("/Produtos");
    } else {
      setError("E-mail ou senha inválidos.");
    }
  };

  return (
    <Container>
      <Form>
        <Logo src={logo} alt="Mercearia Ferrari" />

        <Fieldset>
          <legend>Email</legend>
          <Icon src={gmail} alt="Email" />
          <Input
            type="email"
            name="email"
            required
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
        </Fieldset>

        <Fieldset>
          <legend>Senha</legend>
          <Icon src={senha} alt="Senha" />
          <Input
            type="password"
            name="senha"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Senha"
          />
        </Fieldset>

        {error && <p style={{ color: "red", marginBottom: "12px" }}>{error}</p>}

        <Options>
          <label>
            <Checkbox type="checkbox" name="lembrar" />
            Lembrar de mim
          </label>
          <StyledLink to="/recuperar-senha">Esqueceu a Senha?</StyledLink>
        </Options>

        <EnterButton type="button" onClick={handleLogin}>
          ENTRAR
        </EnterButton>

        <SignupText>
          É novo por aqui? <StyledLink to="/cadastro">Cadastre-se</StyledLink>
        </SignupText>

        <BackLink to="/">&larr; Voltar</BackLink>
      </Form>
    </Container>
  );
}
