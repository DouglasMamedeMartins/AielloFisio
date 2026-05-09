import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: #fff;
    color: #1a1a1a;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
