import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";

// Setting base size for font so REMs can evaluate from.
// Stopping box values from exceeding the upper limit.
// Applied global styles
export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    font-size: 16px; 
    box-size: border-box;
  }

  *, *:before, &:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: ${primaryFont};
  }

  main {
    width: 90%;
    margin: 0 auto;
  }
`;
