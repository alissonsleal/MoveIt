import styled from 'styled-components';
import newLevelImg from '../../assets/NewLevel.svg';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgb(242, 243, 245, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background: var(--white);
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    max-width: 400px;
    padding: 2rem 3rem;
    position: relative;

    text-align: center;

    header {
      font-size: 8.75rem;
      font-weight: 600;
      color: var(--blue);
      background: url(${newLevelImg}) no-repeat center;
      background-size: contain;
    }

    strong {
      font-size: 2.25rem;
      color: var(--title);
    }

    p {
      font-size: 1.25rem;
      color: var(--text);
      margin-top: 0.25rem;
    }

    button.close-modal {
      border: 0;
      color: var(--text);
      background-color: transparent;
      position: absolute;
      top: 0;
      right: 0;
      padding: 1rem;
    }

    a.twitter-button {
      width: 100%;
      padding: 1rem;
      border: 0;
      margin-top: 2rem;
      background: #52b788;
      border-radius: 5px;
      color: #fff;
      font-weight: 600;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: background 0.2s ease;

      &:hover {
        background: var(--green);
      }

      svg {
        margin-right: 1rem;
      }
    }
  }
`;
