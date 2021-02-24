import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../../utils/context/ChallengesContext';
import Timer from '../Timer';
import CycleButton from './CycleButton';

import { Container } from './styles';

let countdownTimeout: NodeJS.Timeout;

const CycleArea: React.FC = () => {
  const {
    startNewChallenge,
    challengesCompleted,
    activeChallenge,
    time,
    setTime,
    hasFinished,
    setHasFinished,
  } = useContext(ChallengesContext);

  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleClick = () => {
    if (isActive === true) {
      clearTimeout(countdownTimeout);
      setIsActive(false);
      setTime(25 * 60);
    } else {
      setIsActive(true);
    }
  };

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }

    if (isActive && time === 0) {
      setIsActive(false);
      setHasFinished(true);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <Container>
      <div className="completed-challenges">
        <span>Desafios Completos</span>
        <span>{challengesCompleted}</span>
      </div>
      <div className="countdown-area">
        <Timer minutes={minutes} seconds={seconds} />
        <CycleButton
          active={isActive}
          hasFinished={hasFinished}
          onClick={handleClick}
        />
      </div>
    </Container>
  );
};

export default CycleArea;
