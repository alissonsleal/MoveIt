import styled, { css } from 'styled-components';

export interface ButtonProps {
  isActive: boolean;
  hasFinished: boolean;
}

export const Container = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))<ButtonProps>`
  background-color: var(--blue);
  width: 24.375rem;
  height: 5rem;
  border: none;
  border-radius: 5px;
  transition: all 0.2s ease;

  strong {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 600;
    color: var(--white);

    svg {
      margin-left: 0.5rem;
      fill: var(--white);
    }
  }

  &:hover {
    background-color: var(--blue-dark);
  }

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.isActive
      ? css`
          background-color: var(--white);

          strong {
            color: var(--text);

            svg {
              fill: var(--text);
            }
          }

          &:hover {
            background-color: var(--red);
            strong {
              color: var(--white);

              svg {
                fill: var(--white);
              }
            }
          }
        `
      : props.hasFinished &&
        css`
          background-color: var(--white);
          border-bottom: 0.25rem solid var(--green);

          strong {
            color: var(--text);

            svg {
              fill: var(--green);
            }
          }

          &:hover {
            background-color: var(--white);
            cursor: not-allowed;
          }
        `}
`;
