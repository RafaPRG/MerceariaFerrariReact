// src/pages/RecuperarSenha.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockUsers } from "../mocks/userMock";
import {
  Container,
  Form,
  Title,
  Fieldset,
  Input,
  Label,
  Button,
  Message,
  BackLink
} from "./styleRecuperarSenha";

export function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = mockUsers.find((u) => u.email === email);
    if (user) {
      user.password = newPassword;
      setMessage("Senha redefinida com sucesso!");
      setTimeout(() => navigate("/login"), 2000);
    } else {
      setMessage("E-mail não encontrado.");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Recuperar Senha</Title>

        <Fieldset>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Fieldset>

        <Fieldset>
          <Label htmlFor="newPassword">Nova Senha</Label>
          <Input
            type="password"
            id="newPassword"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Fieldset>

        <Button type="submit">Redefinir Senha</Button>
        {message && <Message>{message}</Message>}
        <BackLink to="/login">← Voltar ao login</BackLink>
      </Form>
    </Container>
  );
}
