import ChallengeArea from '../ChallengeArea';
import CycleArea from '../CycleArea';
import ExperienceBar from '../ExperienceBar';
import Profile from '../Profile';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <ExperienceBar />
      <Profile />
      <CycleArea />
      <ChallengeArea />
    </Container>
  );
};

export default Main;
