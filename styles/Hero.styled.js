import styled from "styled-components";

export const HeroStyled = styled.div`
  background-color: var(--color-aubergine);
  padding-left: 6.5rem;
  h1 {
    color: white;
    max-width: 41rem;
    font-size: 4rem;
  }
  span {
    color: var(--color-yellow);
  }
  P {
    font-size: 1.25rem;
    color: white;
    max-width: 34rem;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
