import styled from 'styled-components';

export const Container = styled.div`
  height: 9rem;
  width: 24.375rem;
  margin-bottom: 2rem;

  span {
    display: flex;
    justify-content: space-between;
    color: var(--title);
    font-size: 7.4rem;
    font-family: 'Rajdhani', sans-serif;

    h2 {
      display: flex;
      justify-self: center;
      align-self: center;
      background-color: var(--white);
      font-weight: 600;
      line-height: 10rem;

      &:nth-child(1),
      &:nth-child(3) {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }

      &:nth-child(2),
      &:nth-child(4) {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
  }
`;
