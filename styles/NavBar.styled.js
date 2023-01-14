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
  svg {
    width: 13px;
    height: 13px;
    padding-top: 3px;
  }
`;

export const ProductList = styled.div`
  transition: all 0.25s;
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  visibility: hidden;
  opacity: 0;
  border-radius: 10px;
  a {
    color: black;
    font-weight: 400;
    padding: 0.25rem 0 0.5rem 0.25rem;
    font-size: 0.9rem;
    width: 12rem;
    display: flex;
    align-items: center;
    gap: 2px;
    &:first-child {
      margin-top: 0.5rem;
    }
    &:last-child {
      margin-bottom: 0.5rem;
    }
    &:hover {
      background-color: var(--color-link);
      color: white;
      text-decoration: none;
      svg {
        color: white;
      }
    }
  }
  hr {
    background-color: grey;
    height: 1px;
  }
  &:hover {
    top: 25px;
    visibility: visible;
    opacity: 1;
  }
  svg {
    color: black;
    width: 22px;
    height: 22px;
  }
`;
