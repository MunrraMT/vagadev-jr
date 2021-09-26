import styled from 'styled-components';

const HeaderStyled = styled.header`
  padding: 1.125rem;

  display: flex;
  flex-direction: row;
  align-items: center;

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
