import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #f6c6a7;
`;

export const Form = styled.form`
  background: #f6f1e5;
  border: 2.5px solid #222;
  border-radius: 38px;
  box-shadow: 0 2px 16px -2px rgba(124, 79, 29, 0.13);
  padding: 38px 34px 26px;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 140px;
  margin-bottom: 30px;
`;

export const Fieldset = styled.fieldset`
  border: none;
  width: 100%;
  margin-bottom: 22px;
  display: flex;
  align-items: center;
  gap: 12px;

  legend {
    display: none;
  }
`;

export const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  border-bottom: 2px solid #222;
  background: transparent;
  font-size: 1.08em;
  padding: 8px 4px;
  color: #222;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-bottom-color: #e22727;
  }
`;

export const Options = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.97em;
  margin-bottom: 24px;

  label {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #7c4f1d;
    cursor: pointer;
  }
`;

export const Checkbox = styled.input`
  accent-color: #e22727;
  width: 16px;
  height: 16px;
`;

export const Forgot = styled.a`
  color: #222;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #e22727;
    text-decoration: underline;
  }
`;

export const EnterButton = styled.button`
  width: 100%;
  background: #f6c6a7;
  color: #222;
  border: none;
  border-radius: 20px;
  padding: 14px 0;
  font-size: 1.25em;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  letter-spacing: 1px;

  &:hover {
    background: #e22727;
    color: #fff;
  }
`;

export const SignupText = styled.p`
  text-align: center;
  font-size: 0.97em;
  color: #222;
  margin-bottom: 12px;
`;

export const StyledLink = styled(RouterLink)`
  color: #e22727;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const BackLink = styled(RouterLink)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 1em;
  color: #222;
  text-decoration: none;
  margin-top: 12px;

  &:hover {
    color: #e22727;
    text-decoration: underline;
  }
`;
