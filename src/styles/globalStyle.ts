import { createGlobalStyle } from 'styled-components';
import normalize from '@/styles/normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    width: 100%;
    background-color: #ffffff;
    color: #002143;
  }

  body:lang(en) {
    font-family: 'Noto Sans', sans-serif;
  }
  body:lang(zh-tw) {
    font-family: 'Noto Sans TC', sans-serif;
  }
  body:lang(zh-cn) {
    font-family: 'Noto Sans SC', sans-serif;
  }
  body:lang(ja) {
    font-family: 'Noto Sans JP', sans-serif;
  }
  body:lang(ko) {
    font-family: 'Open Sans', sans-serif;
  }

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    line-height: normal;
  }

  img {
    vertical-align: middle;
  }

  a,
  a * {
    cursor: pointer;
    text-decoration: none;
    color: canvastext;
  }

  button,
  input[type=button],
  input[type=image],
  input[type=reset],
  input[type=submit],
  label {
    cursor: pointer;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
