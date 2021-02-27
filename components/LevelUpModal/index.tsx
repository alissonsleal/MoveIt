import { ImWhatsapp } from 'react-icons/im';
import { FiX } from 'react-icons/fi';
import { Container } from './styles';
import { ChallengesContext } from '../../utils/context/ChallengesContext';
import { useContext } from 'react';

const LevelUpModal: React.FC = () => {
  const { setIsModalOpen, level } = useContext(ChallengesContext);
  return (
    <Container>
      <div className="modal">
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button className="close-modal" onClick={() => setIsModalOpen(false)}>
          <FiX size={32} />
        </button>
        <a
          className="twitter-button"
          href={`https://api.whatsapp.com/send?text=Acabei%20de%20subir%20para%20o%20nível%20${level}%20na%20Move%20It.%20https://dev-moveit.vercel.app/`}
          rel="noreferrer nofollow"
          target="_blank"
        >
          <ImWhatsapp size={20} />
          Compartilhe agora
        </a>
      </div>
    </Container>
  );
};

export default LevelUpModal;
