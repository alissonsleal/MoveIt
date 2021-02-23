import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  color: var(--title);
  margin-bottom: 2rem;

  div {
    flex: 1;
    display: flex;
    justify-content: space-evenly;

    div {
      display: flex;
      flex: 1;
      align-items: center;
      font-size: 8.5rem;
      border-radius: 5px;
      background-color: var(--white);
      text-align: center;

      span {
        flex: 1;
      }

      & span:first-child {
        border-right: 1px solid var(--gray-line);
      }
      & span:last-child {
        border-left: 1px solid var(--gray-line);
      }
    }
  }

  .colon {
    display: flex;
    justify-content: center;
    font-size: 8rem;
    margin: 0 0.5rem;
  }
`;
