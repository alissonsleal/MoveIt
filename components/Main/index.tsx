import React from 'react';
import ExperienceBar from '../ExperienceBar';
import Profile from '../Profile';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <ExperienceBar />
      <Profile />
    </Container>
  );
};

export default Main;
