import styled from 'styled-components';

const SectionStyled = styled.section`
  width: 100%;
  height: 3.25rem;

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
  }

  & header h3 {
    line-height: 3.25rem;
    background-color: var(--color-blue);
    padding-left: 1.375rem;
    border-bottom-left-radius: 0.625rem;
  }

  & section {
    width: 8.75rem;
    height: 3.25rem;

    background-color: var(--color-dark-blue);
    padding: 1.125rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    & button {
      height: 2rem;
      width: 1.5rem;

      border: none;
      background: none;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 3.938rem;
    height: 24rem;

    & header {
      padding-left: 0px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0;
      right: 0;
    }

    & header h3 {
      width: 3.938rem;
      height: 18.75rem;

      writing-mode: sideways-rl;
      border-radius: 0px;
      padding-top: 1.875rem;
      padding-left: 0px;
      line-height: auto;

      display: flex;
      align-items: center;
    }

    & header span {
      height: 100%;
      width: 0.125rem;

      background-color: var(--color-white);
      z-index: 2;
    }

    & section {
      width: 3.938rem;
      height: 5.25rem;

      padding: 0px;
      border-bottom-left-radius: 0.313rem;

      position: relative;
      bottom: 0;
      right: 0;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    & section p {
      grid-column: 1/-1;
      grid-row: 1/2;

      margin-top: auto;
      text-align: center;
    }

    & section button {
      width: 100%;
    }

    & section button:first-child {
      grid-column: 1/2;
      grid-row: 2/3;
    }

    & section button:last-child {
      grid-column: 2/3;
      grid-row: 2/3;
    }
  }
`;

export default SectionStyled;
