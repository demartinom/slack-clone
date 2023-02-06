import styled from "styled-components";
import sizes from "./mediaQueries";

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
  ${sizes.mobile} {
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
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
  ${sizes.mobile} {
    flex-direction: column;
    margin: 4rem 0 0 0;
    padding: 0;
    gap: 0rem;
    align-items: flex-start;
    video {
      width: 408px;
      height: 388px;
    }
    &:nth-of-type(3) {
      video {
        align-self: flex-end;
      }
    }
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
    position: relative;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.125rem;
    color: var(--color-link);
    font-weight: 500;
    text-decoration: none;
    z-index: 1;
    display: inline-block;
    &:before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 0.15rem;
      bottom: -0.15rem;
      left: 0;
      background-color: var(--color-link);
      transform: scaleX(0);
      transform-origin: top left;
      transition: transform 0.3s ease;
      z-index: -1;
    }
    &:hover::before {
      transform: scaleX(1);
    }
  }
  ${sizes.mobile} {
    width: 100%;
    margin: 32px 0 0 0;
    padding-left: 16px;
    h1 {
      font-weight: 700;
      line-height: 1.1875;
      margin-bottom: 1rem;
      font-size: 2rem;
    }
  }
`;
