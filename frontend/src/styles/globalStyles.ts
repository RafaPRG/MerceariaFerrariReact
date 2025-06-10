import { createGlobalStyle } from 'styled-components';

export const colors = {
  primary: "#FFA726",
  secondary: "#2196F3",
  secondaryLight: "#BCE0FB",
  black: "#000",
  white: "#fff",
  background: '#ffffff',
  text: '#333333',
  primaryDark: "#FFA726",
  secondaryDark: "#2980b9",
  border: "#dddddd",
  error: "#e74c3c",
  errorDark: "#c0392b",
  errorLight: "#fadbd8",
  textLight: "#666666",
  disabled: "#95a5a6",
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    color: ${colors.text};
    background-color: ${colors.background};
    overflow-x: hidden;
  }

  #root {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
