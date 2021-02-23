import { useState } from 'react';
import Timer from '../Timer';
import CycleButton from './CycleButton';

import { Container } from './styles';

const CycleArea: React.FC = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Container>
      <div className="completed-challenges">
        <span>Desafios Completos</span>
        <span>00</span>
      </div>
      <div className="countdown-area">
        <Timer />
        <CycleButton active={active} onClick={handleClick} />
      </div>
    </Container>
  );
};

export default CycleArea;
