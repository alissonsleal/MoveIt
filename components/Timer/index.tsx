import React from 'react';

import { Container } from './styles';

interface TimerProps {
  minutes: number;
  seconds: number;
}

const Timer: React.FC<TimerProps> = ({ minutes, seconds }) => {
  const [minuteLeft, minuteRight] = minutes
    .toString()
    .padStart(2, '0')
    .split('');

  const [secondsLeft, secondsRight] = seconds
    .toString()
    .padStart(2, '0')
    .split('');

  return (
    <Container>
      <div>
        <div className="number-container">
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span className="colon">:</span>
        <div>
          <span className="number-container">{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>
    </Container>
  );
};

export default Timer;
