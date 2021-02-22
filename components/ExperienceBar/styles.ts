import styled from 'styled-components';

export const Container = styled.div`
  .experience-bar {
    display: flex;
    align-items: center;

    span {
      font-size: 1rem;

      &.current-experience {
        position: absolute;
        top: 12px;
        transform: translateX(-50%);
      }
    }

    div {
      flex: 1;
      height: 4px;
      border-radius: 4px;
      background: var(--gray-line);
      margin: 0 1.5rem;
      position: relative;

      div {
        margin: 0;
        height: 4px;
        border-radius: 4px;
        background: var(--green);
      }
    }
  }
`;
