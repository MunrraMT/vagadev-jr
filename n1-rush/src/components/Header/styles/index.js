import styled from 'styled-components';

const HeaderStyled = styled.header`
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;

  background: ${(props) =>
    props.scrolledPage && 'var(--color-black-transparent)'};
  transition: all 0.3s;

  & .header-content {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 1.313rem 1rem;
    transition: all 0.3s;
  }

  & .header-content h1 {
    margin-left: 1.75rem;
    margin-right: auto;
  }

  & .header-content nav {
    width: 7rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-right: 1rem;
  }

  @media screen and (min-width: 900px) {
    & .header-content {
      max-width: 74.375rem;

      margin-left: auto;
      margin-right: auto;

      padding-left: 2rem;
      padding-top: ${(props) => (props.scrolledPage ? '1.313rem' : '2.75rem')};
    }

    & .header-content nav {
      width: 27rem;
    }

    & .header-content nav button:not(:last-child) {
      margin-right: 0rem;
      border-right: 1px solid var(--color-white);
    }
  }
`;

export default HeaderStyled;
