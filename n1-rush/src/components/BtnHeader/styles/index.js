import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 2rem;

  background: none;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    opacity: 0;
    font-size: 0rem;
    width: 0rem;
    transition: all 0.3s;
    margin-left: 0;
  }

  @media screen and (min-width: 900px) {
    width: 11.063rem;

    & p {
      opacity: 1;
      color: var(--color-white);
      text-transform: uppercase;
      width: auto;
      margin-left: 1rem;

      font-family: var(--font-family);
      font-weight: 500;
      font-size: 0.875rem;
    }
  }
`;

export default ButtonStyled;
