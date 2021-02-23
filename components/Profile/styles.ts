import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 19.25rem;

  img {
    border-radius: 50%;
    margin-right: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;

    strong {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 1.875rem;
      color: var(--title);
    }

    p {
      font-size: 1rem;
      line-height: 1.1875;

      svg {
        margin-right: 9px;
      }
    }
  }

  @media (max-width: 960px) {
    margin-bottom: 3rem;
  }
`;
