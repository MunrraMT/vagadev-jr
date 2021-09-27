import styled from 'styled-components';

const HeaderStyled = styled.header`
  padding: 1.125rem;
  position: fixed;
  width: 100%;
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

    & img {
      margin-right: 1.267rem;
    }
  }
`;

export default HeaderStyled;
