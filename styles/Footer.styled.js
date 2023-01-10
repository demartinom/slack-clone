import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  img {
    height: 100px;
  }
`;

export const SiteNavigation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const NavigationColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2,
  a {
    font-size: 0.875rem;
  }
  a {
    text-decoration: none;
    color: #454245;
  }
`;

export const LogoContainer = styled.div`
  height: 200px;
  width: 200px;
  img {
    width: 100%;
    height: 100%;
  }
`;
