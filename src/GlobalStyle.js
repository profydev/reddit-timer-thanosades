import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.font.family.default};
    font-size: ${({ theme }) => theme.font.size.default};
    line-height: ${({ theme }) => theme.font.lineHeight.default};
    color: ${({ theme }) => theme.color.text};
    max-width: 1440px;
    margin: 0 auto;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
