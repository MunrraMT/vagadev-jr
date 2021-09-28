import styled from 'styled-components';

const SectionStyled = styled.section`
  width: 100%;

  color: var(--color-white);
  text-transform: uppercase;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & header {
    flex-grow: 2;

    height: 3.25rem;

    background-color: var(--color-blue);
    border-bottom-left-radius: 0.625rem;

    display: flex;
    align-items: center;
  }

  & header h3 {
    padding-left: 1.375rem;
  }

  & section {
    width: 8.75rem;
    height: 3.25rem;

    background-color: var(--color-dark-blue);
    padding: 1.125rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & section p {
    white-space: nowrap;
  }

  & .actions-slidernav {
    padding-right: 0;
  }

  & .actions-slidernav button {
    height: 2rem;
    width: 1.5rem;

    border: none;
    background: none;
    cursor: pointer;
  }

  @media screen and (min-width: 1200px) {
    width: 3.938rem;
    height: 24rem;

    margin-left: -3.938rem;
    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @supports (writing-mode: sideways-rl) {
      & header {
        width: 100%;

        border-radius: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }

      & header h3 {
        writing-mode: sideways-rl;
        white-space: nowrap;
        margin-bottom: 1rem;
        padding-left: 0;
        padding-top: 1.375rem;
      }

      & header span {
        height: 100%;
        width: 2px;

        margin-bottom: 1rem;
        background-color: var(--color-white);
      }
    }

    @supports not (writing-mode: sideways-rl) {
      & header {
        width: 100%;

        border-radius: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }

      & header h3 {
        transform: rotate(90deg);
        white-space: nowrap;
        width: 100%;
        margin-top: 1.5rem;
      }
    }

    & section {
      width: 100%;
      height: 5.25rem;

      border-bottom-left-radius: 0.625rem;

      display: flex;
      flex-direction: column;
    }

    & section p {
      margin-bottom: 0.45rem;
    }

    & section .actions-slidernav {
      width: 3rem;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      padding: 0;
      margin: 0;
    }
  }
`;

export default SectionStyled;
