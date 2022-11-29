import styled from "styled-components";
import { Button } from "./SharedStyles.styled";

export const NavBarStyled = styled.nav`
  height: 2.75rem;
  background-color: var(--color-aubergine);
  padding: 0 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    color: white;
    font-size: 0.9rem;
  }
  svg {
    color: white;
    width: 20px;
    height: 20px;
  }
`;

export const Navigation = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.75rem;
  li {
    color: #fff;
    font-weight: 700;
    font-size: 0.9rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const NavButton = styled(Button)``;
