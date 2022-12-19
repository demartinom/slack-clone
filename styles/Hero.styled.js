import styled from "styled-components";

export const HeroStyled = styled.div`
  background-color: var(--color-aubergine);
  padding-left: 6.5rem;
  display: flex;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h1 {
    color: white;
    max-width: 41rem;
    font-size: 4rem;
    line-height: 4.5rem;
    span {
      color: var(--color-yellow);
    }
  }
  P {
    font-size: 1.25rem;
    color: white;
    max-width: 34rem;
    span {
      font-weight: 700;
    }
  }
`;

export const VideoContainer = styled.div`
  video {
    width: 700px;
    height: 400px;
  }
`;

export const ButtonContainer = styled.div``;
