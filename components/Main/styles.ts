import styled from 'styled-components';

export const Container = styled.main`
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 3fr;
    column-gap: 6.25rem;
    grid-template-areas:
      'header header'
      'left right'
      'left right';
  }

  .header {
    grid-area: header;
  }

  .left {
    grid-area: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .right {
    grid-area: right;
  }
`;
