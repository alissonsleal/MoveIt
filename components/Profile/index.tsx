import { useContext } from 'react';
import { ImArrowUp } from 'react-icons/im';
import { ChallengesContext } from '../../utils/context/ChallengesContext';

import { Container } from './styles';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <Container>
      <img
        src="https://github.com/alissonsleal.png"
        width="88px"
        height="88px"
        alt="Foto de perfil do usuário"
      />
      <div>
        <strong>Alisson Leal</strong>
        <p>
          <ImArrowUp color="#4CD62B" size={16} />
          Level {level}
        </p>
      </div>
    </Container>
  );
};

export default Profile;
