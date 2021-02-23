import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 24.375rem;
  height: 31.25rem;
  background-color: var(--white);
  border-radius: 5px;

  div {
    max-width: 15.625rem;

    h1 {
      font-weight: 500;
      font-size: 24px;
      line-height: 34px;
      text-align: center;
      margin-bottom: 4rem;
    }
  }
  div {
    max-width: 14.125rem;

    img {
      margin-bottom: 1rem;
    }

    p {
      font-size: 16px;
      line-height: 26px;
    }
  }
`;
