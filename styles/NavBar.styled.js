import styled from "styled-components";

export const NavBarStyled = styled.nav`
  height: 5rem;
  background-color: var(--color-aubergine);
  padding: 0 6.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  h3 {
    color: white;
    font-size: 0.9rem;
  }
  svg {
    color: white;
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const Navigation = styled.ul`
  display: flex;
  align-items: center;
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
  align-items: center;
  gap: 1.5rem;
`;
