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

  @media screen and (min-width: 900px) {
    width: 35.313rem;
    height: 15.563rem;

    position: fixed;
    top: ${(props) => (props.scrolledPage ? '3.938rem' : '5.563rem')};
    left: 0;
    z-index: 5;

    padding-top: 2.813rem;
    padding-left: 1.875rem;
    padding-right: 1.875rem;
    padding-bottom: 2.625rem;

    border-radius: 0.313rem;
    border: 2px solid var(--color-blue);
    box-shadow: 10px 10px var(--color-blue);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default SectionStyled;
