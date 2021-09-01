import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* bitter-regular - latin */
  @font-face {
    font-family: 'Bitter';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('./fonts/bitter-v19-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./fonts/bitter-v19-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* montserrat-regular - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('./fonts/montserrat-v18-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./fonts/montserrat-v18-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-500 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: local(''),
        url('./fonts/montserrat-v18-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./fonts/montserrat-v18-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-600 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url('./fonts/montserrat-v18-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./fonts/montserrat-v18-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-700 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('./fonts/montserrat-v18-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./fonts/montserrat-v18-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  body {
    font-family: ${({ theme }) => theme.font.family.default};
    font-size: ${({ theme }) => theme.font.size.default};
    line-height: ${({ theme }) => theme.font.lineHeight.default};
    color: ${({ theme }) => theme.color.text};
  }
`;

export default GlobalStyle;
