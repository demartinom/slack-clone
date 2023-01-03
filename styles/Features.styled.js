import styled from "styled-components";

export const FeaturesStyled = styled.div`
  background-color: var(--color-beige);
`;

export const Companies = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  p {
    font-size: 0.875rem;
    font-weight: 600;
  }
`;

export const Logos = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9rem;
  margin: 4rem 0 0 6.5rem;
  padding-bottom: 3rem;
  video {
    width: 600px;
  }
`;

export const FeaturesText = styled.div`
  width: 30rem;
  h1 {
    font-size: 3rem;
    line-height: 3.5rem;
  }
  p {
    font-size: 1.125rem;
  }
  a {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.125rem;
    color: var(--color-link);
    font-weight: 500;
  }
`;
