import styled from 'styled-components';

const ArticleStyled = styled.article`
  width: 10.375rem;

  color: var(--color-white);

  font-family: var(--font-family);

  & h2 {
    padding-left: 1rem;
    font-weight: 700;
    font-size: 1rem;
  }

  & ul {
    margin-bottom: 1rem;

    & li {
      padding-left: 1rem;
      list-style: none;
      line-height: 2.251rem;
      border-radius: 0.313rem;
      cursor: pointer;

      font-size: 0.875rem;
      font-weight: 400;

      &:hover {
        background-color: var(--color-blue);
      }
    }
  }
`;

export default ArticleStyled;
