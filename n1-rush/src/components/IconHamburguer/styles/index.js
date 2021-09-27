import styled from 'styled-components';

const IconHamburguer = styled.button`
  width: 2.2rem;
  height: 2rem;

  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover span {
    background-color: transparent;
  }

  &:hover span::before {
    transform: rotate(45deg);
    top: 0;
  }

  &:hover span::after {
    width: 1.875rem;

    transform: rotate(-45deg);
    top: 0;
  }
`;

export default IconHamburguer;
