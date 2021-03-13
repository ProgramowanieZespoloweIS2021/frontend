import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyled = createGlobalStyle`
    ${normalize};

    * {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    html {
        height: 100%;
        overflow-x: hidden;
    }

    body {
        height: 100%; 
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root {
        height: 100%; 
    }

    svg {
      transition: all .5s;
      path, circle, rect {
        transition: all .5s ;
      }
    }
`;
