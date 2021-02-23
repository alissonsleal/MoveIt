import { Container } from './styles';

import LevelUpIcon from '../../assets/LevelUpIcon.svg';

const ChallengeArea: React.FC = () => {
  return (
    <Container>
      <div>
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
    </Container>
  );
};

export default ChallengeArea;
