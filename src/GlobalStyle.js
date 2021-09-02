import { createGlobalStyle } from 'styled-components';
import BitterRegular from './fonts/Bitter-Regular.woff';
import BitterRegular2 from './fonts/Bitter-Regular.woff2';
import MontserratRegular from './fonts/Montserrat-Regular.woff';
import MontserratRegular2 from './fonts/Montserrat-Regular.woff2';
import MontserratMedium from './fonts/Montserrat-500.woff';
import MontserratMedium2 from './fonts/Montserrat-500.woff2';
import MontserratSemiBold from './fonts/Montserrat-600.woff';
import MontserratSemiBold2 from './fonts/Montserrat-600.woff2';
import MontserratBold from './fonts/Montserrat-700.woff';
import MontserratBold2 from './fonts/Montserrat-700.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Bitter';
    font-style: normal;
    font-weight: 400;

    src: local('Bitter'),
        url(${BitterRegular2}) format('woff2'),
        url(${BitterRegular}) format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat'),
        url(${MontserratRegular2}) format('woff2'),
        url(${MontserratRegular}) format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: local('Montserrat'),
        url(${MontserratMedium2}) format('woff2'),
        url(${MontserratMedium}) format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: local('Montserrat'),
    url(${MontserratSemiBold2}) format('woff2'),
    url(${MontserratSemiBold}) format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local('Montserrat'),
        url(${MontserratBold2}) format('woff2'),
        url(${MontserratBold}) format('woff'); 
  }
  
  body {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.family.default};
    font-size: ${({ theme }) => theme.font.size.default};
    line-height: ${({ theme }) => theme.font.lineHeight.default};
    color: ${({ theme }) => theme.color.text};
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
