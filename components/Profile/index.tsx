import { ImArrowUp } from 'react-icons/im';

import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <img
        src="https://thispersondoesnotexist.com/image"
        width="88px"
        height="88px"
        alt="Foto de perfil do usuário"
      />
      <div>
        <strong>Leanne Graham</strong>
        <p>
          <ImArrowUp color="#4CD62B" size={16} />
          Level 1
        </p>
      </div>
    </Container>
  );
};

export default Profile;
