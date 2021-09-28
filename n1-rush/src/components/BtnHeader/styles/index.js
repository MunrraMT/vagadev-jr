import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 2rem;

  background: none;
  border: none;
  cursor: pointer;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:before {
    width: 60%;
  }

  &:before {
    content: '';
    width: 0%;
    height: 2px;
    background-color: var(--color-blue);
    transition: all 0.3s;

    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
  }

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
