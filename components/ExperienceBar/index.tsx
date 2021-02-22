import { Container } from './styles';

let experience = {
  currentExperience: {
    absolute: 300,
    percent: `50%`,
  },
  maxExperience: 600,
};

const ExperienceBar: React.FC = () => {
  return (
    <Container>
      <header className="experience-bar">
        <span>0 xp</span>
        <div>
          <div
            style={{
              width: `${experience.currentExperience.percent}`,
              maxWidth: '100%',
            }}
          />

          <span
            className="current-experience"
            style={{ left: `${experience.currentExperience.percent}` }}
          >
            {experience.currentExperience.absolute} xp
          </span>
        </div>
        <span>{experience.maxExperience} xp</span>
      </header>
    </Container>
  );
};

export default ExperienceBar;
