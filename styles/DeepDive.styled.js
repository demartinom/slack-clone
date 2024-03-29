import styled from "styled-components";

export const DeepDiveStyled = styled.div`
  background-color: var(--color-beige);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
  h1 {
    margin-bottom: 2rem;
    margin-top: 3rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 2rem;
  cursor: pointer;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 17.8rem;
  height: 26.5rem;
  background-color: ${(props) =>
    props.purple ? "var(--color-aubergine)" : "white"};
  position: relative;
  transition: all 0.25s;
  h1,
  h3 {
    color: ${(props) => (props.purple ? "white" : "black")};
    padding: 0 12px;
  }
  h1 {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }
  h3 {
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: ${(props) => (props.purple ? "1.5rem" : "2rem")};
  }
  a {
    text-decoration: none;
    color: ${(props) => (props.purple ? "white" : "var(--color-link)")};
  }
  :hover {
    scale: 1.05;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 17.8rem;
  height: 13rem;
  margin-top: ${(props) => (props.purple ? "3rem" : "0rem")};
  img {
    padding: 12px;
  }
`;

export const LinkText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-decoration: none;
  position: absolute;
  bottom: 10px;
  padding-right: 1rem;
  h3 {
    font-weight: 700;
    letter-spacing: 0.8px;
    margin: 0;
    color: ${(props) => (props.purple ? "white" : "var(--color-link)")};
  }
  svg {
    scale: 1.75;
  }
`;
