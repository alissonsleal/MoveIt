import { useContext } from 'react';
import { ChallengesContext } from '../../utils/context/ChallengesContext';
import { Container } from './styles';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext,
  );

  return (
    <Container>
      <header className="experience-bar">
        <span>0 xp</span>
        <div>
          <div
            style={{
              width: `${(currentExperience * 100) / experienceToNextLevel}%`,
              maxWidth: '100%',
            }}
          />

          <span
            className="current-experience"
            style={{
              left: `${(currentExperience * 100) / experienceToNextLevel}%`,
            }}
          >
            {currentExperience} xp
          </span>
        </div>
        <span>{experienceToNextLevel} xp</span>
      </header>
    </Container>
  );
};

export default ExperienceBar;
