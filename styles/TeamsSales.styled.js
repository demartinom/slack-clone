import styled from "styled-components";

export const TeamsSalesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 0 0;
  position: relative;
  h1 {
    font-size: 3.125rem;
    margin-bottom: 0.75rem;
  }
  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
`;

export const Statistics = styled.div`
  display: flex;
  gap: 13rem;
  margin-bottom: 8rem;
`;

export const SingleStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 12rem;
  h2 {
    font-size: 4rem;
    color: var(--color-aubergine);
  }
  p {
    font-size: 0.875rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 5rem;
`;

export const Testimonial = styled.div`
  display: flex;
`;

export const VideoContainer = styled.div`
  position: relative;
  video {
    border-top-right-radius: 500px;
    border-bottom-right-radius: 500px;
    width: 45rem;
    cursor: pointer;
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    cursor: pointer;
    :hover {
      filter: brightness(50%);
    }
  }
`;

export const TestimonialText = styled.div`
  h2 {
    font-weight: 100;
    font-style: italic;
  }
`;
