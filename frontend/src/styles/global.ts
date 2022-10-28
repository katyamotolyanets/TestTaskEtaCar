import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Tahoma', sans-serif;
        font-size: 2vmin;
    }
    #root {
        margin:0 auto;
    }
`;
