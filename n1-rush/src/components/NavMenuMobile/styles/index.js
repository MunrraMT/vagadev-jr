import styled from 'styled-components';

const SectionStyled = styled.section`
  height: 100vh;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  background: var(--color-dark-blue);
  padding-top: 6.316rem;
  padding-left: 1.813rem;
  padding-right: 1.813rem;
  transition: all 0.3s;

  display: flex;
  flex-direction: column;

  & section article:not(:first-child) {
    margin-top: 1rem;
  }

  & section article:not(:last-child) {
    border-bottom: 1px solid var(--color-very-dark-blue);
  }
`;

export default SectionStyled;
