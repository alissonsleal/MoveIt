import React from 'react';

import { Container } from './styles';

const Timer: React.FC = () => {
  let time;
  return (
    <Container>
      <span>
        <h2>2</h2>
        <h2>5</h2>:<h2>0</h2>
        <h2>0</h2>
      </span>
    </Container>
  );
};

export default Timer;
