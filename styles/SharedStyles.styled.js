import * as styled from "styled-components";

const GlobalStyles = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    --page-font: proxima-nova, sans-serif;
    --color-blue: #36c5f0;
    --color-yellow: #ecb22e;
    --color-green: #2eb67d;
    --color-red: #e01e51;
    --color-aubergine: #4a154b;
    --color-null: #611f69;
    --color-active: #7c3085;
  }
`;

export default GlobalStyles;
