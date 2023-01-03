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

  video {
    width: 600px;
  }
`;

export const FeaturesText = styled.div`
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.125rem;
  }
  a {
    display: flex;
    align-items: center;
  }
`;
