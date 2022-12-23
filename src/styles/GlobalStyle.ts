import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR';
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button:hover {
    cursor:pointer;
  }
`;

export default GlobalStyle;
