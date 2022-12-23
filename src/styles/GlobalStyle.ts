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

  input {
    outline: none;
    border-radius: 5px;
    border: 1px solid #9c9c9c;
  }

  button:hover {
    cursor:pointer;
  }
`;

export default GlobalStyle;
