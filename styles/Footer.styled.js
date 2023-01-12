import styled from "styled-components";

export const FooterStyled = styled.footer`
  padding: 3rem 6.5rem 1.5rem 6.5rem;
  img {
    height: 100px;
  }
  p {
    font-size: 0.75rem;
  }
`;

export const SiteNavigation = styled.div`
  display: flex;
  width: 100%;
  gap: 8rem;
  margin-bottom: 5rem;
`;

export const NavigationColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h2,
  a {
    font-size: 0.875rem;
  }
  a {
    text-decoration: none;
    color: #454245;
    &:hover {
      color: var(--color-link);
    }
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
    font-size: 0.875rem;
    &:hover {
      color: var(--color-link);
    }
  }
`;

export const PrivacyLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
  img {
    height: 100%;
  }
  a {
    font-weight: 700;
    display: flex;
    align-items: center;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  a {
    display: flex;
    align-items: center;
  }
  p {
    font-size: 0.875rem;
    color: var(--color-link);
    font-weight: 700;
  }
  svg {
    height: 1.2rem;
    width: 1.2rem;
  }
`;
