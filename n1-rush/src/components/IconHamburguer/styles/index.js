import styled from 'styled-components';

const IconHamburguer = styled.button`
  width: 2.2rem;
  height: 2rem;

  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;

  & .tooltip-target {
    width: 1.5rem;
    height: 1.5rem;

    background-color: var(--color-blue);
    transform: rotate(45deg);

    position: absolute;
    top: 2.5rem;
    left: 0rem;
    z-index: 1;
  }
`;

export default IconHamburguer;
