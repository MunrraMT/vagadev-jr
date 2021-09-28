import styled from 'styled-components';

const ButtonStyled = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  background: none;

  & p {
    background-color: var(--color-blue);
    color: var(--color-white);
    border-radius: 100%;
    width: 1.438rem;
    height: 1.438rem;
    line-height: 0.875rem;

    font-family: var(--font-family);
    font-weight: 900;
    font-size: 0.875rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 50%;
    left: 1.125rem;
    transform: translateY(-50%);
  }
`;

export default ButtonStyled;
