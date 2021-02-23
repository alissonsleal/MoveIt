import ChallengeArea from '../ChallengeArea';
import CycleArea from '../CycleArea';
import ExperienceBar from '../ExperienceBar';
import Profile from '../Profile';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div className="header">
          <ExperienceBar />
        </div>
        <div className="left">
          <Profile />
          <CycleArea />
        </div>
        <div className="right">
          <ChallengeArea />
        </div>
      </div>
    </Container>
  );
};

export default Main;
