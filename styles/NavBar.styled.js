import styled from "styled-components";

export const NavBarStyled = styled.nav`
  height: 2.75rem;
  background-color: var(--color-aubergine);
  padding: 0 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.ul`
  display: flex;
  list-style: none;
  li {
    color: #fff;
    font-size: 0.9rem;
    padding: 16px 15px;
  }
`;
