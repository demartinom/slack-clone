import styled from "styled-components";
import { Button } from "./SharedStyles.styled";

export const HeroStyled = styled.div`
  background-color: var(--color-aubergine);
  padding: 2rem 0 10rem 6.5rem;
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
    margin-top: 2rem;
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

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4rem;
  margin-bottom: 1rem;
`;

export const GoogleButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background-color: #4285f4;
  color: white;
  padding: 0 16px 0 4px;
  img {
    background-color: white;
    padding: 14px;
    border-radius: 2px;
    margin: 3px 0 3px 0;
  }
`;
