// src/pages/styleRecuperarSenha.ts
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f6c6a7;
  padding: 20px;
`;

export const Form = styled.form`
  background: #f6f1e5;
  border: 2.5px solid #222;
  border-radius: 28px;
  padding: 30px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 2px 16px -2px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  color: #7c4f1d;
  margin-bottom: 20px;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: none;
`;

export const Label = styled.label`
  margin-bottom: 6px;
  color: #333;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1.5px solid #aaa;
  font-size: 1em;

  &:focus {
    outline: none;
    border-color: #e22727;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: #e22727;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #b71c1c;
  }
`;

export const Message = styled.p`
  margin-top: 14px;
  text-align: center;
  font-weight: bold;
  color: #7c4f1d;
`;

export const BackLink = styled(Link)`
  display: block;
  margin-top: 18px;
  text-align: center;
  color: #222;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #e22727;
    text-decoration: underline;
  }
`;
