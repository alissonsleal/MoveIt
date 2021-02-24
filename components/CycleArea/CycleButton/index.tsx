import { ButtonHTMLAttributes } from 'react';
import { FaPlay } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { IoMdCheckmarkCircle } from 'react-icons/io';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
  hasFinished: boolean;
}

const CycleButton: React.FC<ButtonProps> = ({
  active,
  hasFinished,
  ...rest
}) => {
  return (
    <Container
      type="button"
      isActive={active}
      hasFinished={hasFinished}
      {...rest}
    >
      {hasFinished ? (
        <strong>
          Ciclo Encerrado
          <IoMdCheckmarkCircle />
        </strong>
      ) : (
        <>
          {active ? (
            <strong>
              Abandonar ciclo
              <ImCross />
            </strong>
          ) : (
            <strong>
              Iniciar um ciclo
              <FaPlay />
            </strong>
          )}
        </>
      )}
    </Container>
  );
};

export default CycleButton;
