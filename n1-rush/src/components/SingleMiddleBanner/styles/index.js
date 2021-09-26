import styled from 'styled-components';

const ArticleStyled = styled.article`
  height: 13.688rem;
  width: 100%;

  background-color: #084154;
  border-bottom-left-radius: 0.313rem;

  display: flex;
  flex-direction: column-reverse;

  & header {
    background-color: #3ec6e0;
    margin-left: 0.368rem;
    padding-top: 0.357rem;
    padding-right: 0.851rem;
    padding-bottom: 0.375rem;
    padding-left: 0.625rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    & h4 {
      color: #084154;
      white-space: nowrap;
      margin-right: 1rem;

      font-family: 'Roboto';
      font-weight: 700;
      font-size: 0.75rem;
    }

    & span {
      width: 100%;
      height: 0.125rem;

      background-color: #084154;
    }
  }

  & img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
  }
`;

export default ArticleStyled;
