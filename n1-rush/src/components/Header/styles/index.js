import styled from 'styled-components';

const HeaderStyled = styled.header`
  width: 100%;
  max-width: 74.375rem;

  padding: 1.125rem;
  position: fixed;
  z-index: 3;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: ${(props) =>
    props.backGround ? 'var(--color-black-transparent)' : 'none'};

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
