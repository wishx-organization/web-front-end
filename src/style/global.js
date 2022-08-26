import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

    *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    }

    li{
        list-style-type: none;
    }

    a{
        text-decoration:none;

    }

    body {
        margin: 0;
        padding: 0;
        /* font-family: 'Manrope', sans-serif; */
    }
`;
export default GlobalStyle;