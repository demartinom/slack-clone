import styled from "styled-components";

export const DeepDiveStyled = styled.div`
  background-color: var(--color-beige);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
  h1{
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
  color: ${(props) => (props.purple ? "white" : "black")};
  position: relative;
  h1,
  h3 {
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${(props) => (props.purple ? "white" : "var(--color-link)")};
    text-decoration: none;
    position: absolute;
    bottom: 10px;
    padding-right: 1rem;
    h3 {
      font-weight: 700;
      letter-spacing: 0.8px;
      margin: 0;
    }
    svg {
      scale: 1.75;
    }
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
