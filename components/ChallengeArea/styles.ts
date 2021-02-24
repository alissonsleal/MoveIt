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

  .challenge-not-active {
    max-width: 15.625rem;

    h1 {
      font-weight: 500;
      font-size: 24px;
      line-height: 34px;
      text-align: center;
      margin-bottom: 4rem;
    }

    div {
      img {
        margin-bottom: 1rem;
      }

      p {
        font-size: 16px;
        line-height: 26px;
      }
    }
  }

  .challenge-active {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    max-width: 21.25rem;

    strong {
      font-weight: 600;
      font-size: 20px;
      color: var(--blue);
      padding-bottom: 1rem;
      margin: 0 2rem;
      border-bottom: 1px solid #dcdde0;
    }

    h1 {
      color: var(--title);
      font-weight: 600;
      font-size: 30px;
      padding: 1.5rem 0 0.5rem 0;
    }

    div:first-child {
      display: flex;
      flex-direction: column;
    }

    div:last-child {
      display: flex;
      justify-content: center;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1.5rem;
        width: 10.875rem;
        height: 3.125rem;
        font-weight: 600;
        font-size: 16px;
        color: var(--white);
        border: none;
        border-radius: 5px;

        &:focus {
          outline: none;
        }
      }

      button:first-child {
        background-color: var(--red);
        margin-right: 0.5rem;
      }

      button:last-child {
        background-color: var(--green);
      }
    }
  }
`;
