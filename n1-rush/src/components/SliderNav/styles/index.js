import styled from 'styled-components';

const SectionStyled = styled.section`
  width: 100%;
  height: 3.25rem;

  color: var(--color-white);
  text-transform: uppercase;

  font-family: 'Roboto';
  font-size: 0.875;
  font-weight: 400;

  display: flex;
  align-items: center;

  & h3 {
    flex-grow: 2;

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
`;

export default SectionStyled;
