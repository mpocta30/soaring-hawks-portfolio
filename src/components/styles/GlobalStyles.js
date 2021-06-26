import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    p {
        font-size: clamp(1rem,1.5vw,1.25rem);
    }
}
`;
