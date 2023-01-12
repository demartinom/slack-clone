import styled from "styled-components";
import { PurpleBackButton } from "./SharedStyles.styled";

export const PreFootStyled = styled.div`
  background-color: var(--color-aubergine);
  clip-path: ellipse(75% 100% at center top);
  color: white;
  min-height: 23rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  h1 {
    font-size: 3.125rem;
  }
`;

export const PreFootButtonsContainer = styled.div`
display: flex;
gap: .5rem;
`;

export const PreFootButtons = styled(PurpleBackButton)`
  width: 11.4rem;
  height: 3.5rem;
`;
