import styled from 'styled-components';

export const Container = styled.div`
  width: 24.375rem;
  height: 22.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .completed-challenges {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 1.5px solid #d7d8da;

    span {
      color: var(--text);
      font-size: 1.125rem;
      line-height: 1.5rem;
      font-weight: 500;
    }
  }

  .countdown-area {
    display: flex;
    flex-direction: column;
  }
`;
