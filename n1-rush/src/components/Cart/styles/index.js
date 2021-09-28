import styled from 'styled-components';

const ButtonStyled = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  background: none;

  &:hover:before {
    width: 70%;
  }

  &:before {
    content: '';
    width: 0;
    height: 2px;
    background-color: var(--color-blue);
    transition: all 0.3s;

    position: absolute;
    bottom: -0.75rem;
    left: 70%;
    transform: translateX(-50%);
  }

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

  @media screen and (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: 2.438rem;

    & p {
      position: relative;
      top: auto;
      left: auto;
      transform: none;

      margin-left: 0.367rem;
    }
  }
`;

export default ButtonStyled;
