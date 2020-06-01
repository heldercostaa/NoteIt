import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-color: #F2F2F2;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #000;
    font-size: 14px;
    font-family: 'Merriweather', serif;
  }

  button {
    cursor: pointer;
  }
`;
