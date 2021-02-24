import { Container } from './styles';

import LevelUpIcon from '../../assets/LevelUpIcon.svg';
import Eye from '../../assets/Eye.svg';
import Exercise from '../../assets/Exercise.svg';
import { useContext } from 'react';
import { ChallengesContext } from '../../utils/context/ChallengesContext';

const ChallengeArea: React.FC = () => {
  const { activeChallenge, resetChallenge, challengeCompleted } = useContext(
    ChallengesContext,
  );

  return (
    <Container>
      {activeChallenge ? (
        <div className="challenge-active">
          <strong>Ganhe {activeChallenge.amount} xp</strong>
          <div>
            {activeChallenge.type === 'eye' ? (
              <>
                <img
                  src={Exercise}
                  alt="Exercite-se"
                  height="140px"
                  width="112px"
                />
                <h1>Exercite-se</h1>
              </>
            ) : (
              <>
                <img src={Eye} alt="Olho" height="152px" width="78px" />
                <h1>Mova os olhos</h1>
              </>
            )}

            <p>
              É agora parça, bora lá meu amigo. <br />
              {activeChallenge.description}
            </p>
          </div>
          <div>
            <button onClick={resetChallenge}>Falhei</button>
            <button onClick={() => challengeCompleted(activeChallenge.amount)}>
              Completei
            </button>
          </div>
        </div>
      ) : (
        <div className="challenge-not-active">
          <h1>Inicie um ciclo para receber desafios</h1>
          <div>
            <img
              src={LevelUpIcon}
              alt="Próximo Nível"
              height="80px"
              width="58.56px"
            />
            <p>Avance de level completando os desafios.</p>
          </div>
        </div>
      )}
    </Container>
  );
};

export default ChallengeArea;
