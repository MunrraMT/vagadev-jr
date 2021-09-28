import styled from 'styled-components';

const HeaderStyled = styled.header`
  width: 100%;
  max-width: 74.375rem;

  padding: 1.125rem;
  position: fixed;
  z-index: 3;
  transition: all 0.3s;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: ${(props) =>
    props.scrolledPage ? 'var(--color-black-transparent)' : 'none'};

  & h1 {
    margin-left: 1.75rem;
    margin-right: auto;
  }

  & section {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & button {
      margin-right: 1.267rem;
    }
  }

  @media screen and (min-width: 900px) {
    padding-top: ${(props) => (props.scrolledPage ? '1.125rem' : '2.75rem')};

    & section button:not(:last-child) {
      margin-right: 0rem;
      border-right: 1px solid var(--color-white);
    }

    & section button:last-child {
      margin-left: 2.438rem;
    }
  }
`;

export default HeaderStyled;
