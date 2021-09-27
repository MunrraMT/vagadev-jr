import styled from 'styled-components';

const IconBar = styled.span`
  width: 1.875rem;
  height: 0.188rem;

  display: block;
  border-radius: 10rem;
  transition: all 0.3s;

  position: relative;

  background-color: ${(props) =>
    props.isOpenMenu ? 'transparent' : 'var(--color-white)'};

  &::after,
  &::before {
    content: '';
    height: 0.188rem;

    display: block;
    background-color: var(--color-white);
    border-radius: 10rem;
    transition: all 0.3s;

    position: absolute;
    left: 0;
  }

  &::after {
    width: ${(props) => (props.isOpenMenu ? '1.875rem' : '1.375rem')};
    top: ${(props) => (props.isOpenMenu ? '0' : '0.653rem')};
    transform: ${(props) => props.isOpenMenu && 'rotate(-45deg)'};
  }

  &::before {
    width: 1.875rem;

    top: ${(props) => (props.isOpenMenu ? '0' : '-0.653rem')};
    transform: ${(props) => props.isOpenMenu && 'rotate(45deg)'};
  }
`;

export default IconBar;
