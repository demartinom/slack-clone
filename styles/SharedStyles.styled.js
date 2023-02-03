import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import sizes from "./mediaQueries";

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
    --color-beige: #f4ede4;
    --color-link: #1264a3
  }
  body {
    font-family: var(--page-font);
    h1,
    h2,
    h3,
    h4 {
      font-weight: 700;
      line-height: 1.364;
      letter-spacing: -0.3px;

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

export const Button = styled.button`
  background-color: ${(props) =>
    props.primary ? "var(--color-aubergine)" : "white"};
  color: ${(props) => (props.primary ? "white" : "var(--color-aubergine)")};
  border-radius: 0.25rem;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 12px 16px;
  letter-spacing: 0.8px;
  border: none;
  cursor: pointer;
`;

export const PurpleBackButton = styled(Button)`
  outline: ${(props) =>
    props.primary ? "1px solid white" : "1px solid var(--color-aubergine)"};
  padding: ${(props) => (props.hero ? "19px 40px 20px 40px;" : "")};
  outline-offset: 0;
  transition: all 0.15s;
  :hover {
    outline: ${(props) =>
      props.primary ? "2px solid white" : "2px solid var(--color-aubergine)"};
    outline-offset: -2px;
  }
  ${sizes.mobile} {
    width: 95%;
  }
`;

export const ButtonLarge = styled(Button)`
  padding: 19px 40px 20px 40px;
  background-color: ${(props) => (props.primary ? "var(--color-null)" : "")};
  outline: ${(props) => (props.primary ? "" : "1px solid white")};
  transition: all 0.3s;
  :hover {
    background-color: ${(props) =>
      props.primary ? "var(--color-aubergine)" : "#fff"};
    outline: ${(props) => (props.primary ? "" : "2px solid var(--color-null)")};
  }
`;
export default GlobalStyles;
