import styled from "styled-components";

export const TeamsSalesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 0 0;
  position: relative;
  h1 {
    font-size: 3.125rem;
    margin-bottom: .75rem;
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
  gap: .5rem;
  margin-bottom: 5rem;
`;
