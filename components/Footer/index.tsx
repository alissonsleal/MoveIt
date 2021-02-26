import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <h3>
        Feito por Alisson Leal, veja o código fonte no{' '}
        <a
          href="https://github.com/Alissonsleal/MoveIt"
          rel="nofollow noreferrer"
          target="_blank"
        >
          Github
        </a>
      </h3>
    </Container>
  );
};

export default Footer;
