import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
  body {
    font-family: var(--page-font);
    h1,
    h2,
    h3,
    h4 {
      font-weight: 700;
    }
    h1 {
      font-size: 36px;
    }
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 18px;
    }
    h4 {
      font-size: 12px;
    }
    p {
      font-size: 7px;
    }
  }
`;

export const Button = styled.div`
  background-color: ${(props) =>
    props.primary ? "var(--color-aubergine)" : "white"};
  color: ${(props) => (props.primary ? "white" : "var(--color-aubergine)")};
`;

export default GlobalStyles;