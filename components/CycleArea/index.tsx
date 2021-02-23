import { useEffect, useState } from 'react';
import Timer from '../Timer';
import CycleButton from './CycleButton';

import { Container } from './styles';

const CycleArea: React.FC = () => {
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(25 * 60);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }

    if (time === 0) {
      setActive(false);
    }
  }, [active, time]);

  return (
    <Container>
      <div className="completed-challenges">
        <span>Desafios Completos</span>
        <span>00</span>
      </div>
      <div className="countdown-area">
        <Timer minutes={minutes} seconds={seconds} />
        <CycleButton active={active} onClick={handleClick} />
      </div>
    </Container>
  );
};

export default CycleArea;
