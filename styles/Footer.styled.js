import styled from "styled-components";

export const FooterStyled = styled.footer`
  padding: 3rem 6.5rem 0 6.5rem;
  img {
    height: 100px;
  }
`;

export const SiteNavigation = styled.div`
  display: flex;
  width: 100%;
  gap: 8rem;
`;

export const NavigationColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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

export const MetaSocial = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const PrivacyLinks = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 100%;
  }
  a {
    font-weight: 700;
  }
`;

export const SocialIcons = styled.div``;
