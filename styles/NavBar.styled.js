import styled from "styled-components";

export const NavBarStyled = styled.nav`
  height: 5rem;
  background-color: var(--color-aubergine);
  padding: 0 6.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  a {
    color: #fff;
    font-weight: 700;
    font-size: 0.9rem;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
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
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Dropdown = styled.div`
  position: relative;
  div {
    top: 0;
  }
  &:hover {
    div {
      top: 25px;
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const ProductList = styled.div`
  transition: all 0.25s;
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  visibility: hidden;
  opacity: 0;
  a {
    color: grey;
    &:hover {
      background-color: var(--color-link);
      color: white;
      text-decoration: none;
    }
  }
  &:hover {
    top: 25px;
    visibility: visible;
    opacity: 1;
  }
`;
