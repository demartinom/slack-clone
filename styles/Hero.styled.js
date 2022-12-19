import styled from "styled-components";

export const HeroStyled = styled.div`
  background-color: var(--color-aubergine);
  padding: 2rem 0 12rem 6.5rem;
  display: flex;
  overflow-x: hidden;
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
  position: relative;
  video {
    position: absolute;
    right: -50px;
    width: 700px;
  }
`;

export const ButtonContainer = styled.div``;
