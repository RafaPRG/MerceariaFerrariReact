// src/pages/RecuperarSenha.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { passwordService } from "../services/passwordService";
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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await passwordService.updatePassword({
        email,
        new_password: newPassword,
      });
      
      setMessage("Senha redefinida com sucesso!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error: any) {
      console.error('Erro ao redefinir senha:', error);
      if (error.response?.status === 400) {
        setMessage("E-mail não encontrado ou erro na validação.");
      } else {
        setMessage("Erro ao redefinir senha. Tente novamente.");
      }
    } finally {
      setLoading(false);
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
            disabled={loading}
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
            disabled={loading}
            minLength={6}
          />
        </Fieldset>

        <Button type="submit" disabled={loading}>
          {loading ? "Redefinindo..." : "Redefinir Senha"}
        </Button>
        {message && <Message>{message}</Message>}
        <BackLink to="/login">← Voltar ao login</BackLink>
      </Form>
    </Container>
  );
}
