import styled from 'styled-components';

const ArticleStyled = styled.article`
  color: var(--color-white);

  font-family: var(--font-family);

  & h2 {
    padding-left: 1rem;
    font-weight: 900;
    font-size: 1.5rem;
  }

  & ul {
    margin-bottom: 1rem;

    & li {
      padding-left: 1rem;
      list-style: none;
      line-height: 2.251rem;
      border-radius: 0.313rem;
      cursor: pointer;

      font-weight: 400;
      font-size: 1.125rem;

      &:hover {
        background-color: var(--color-blue);
      }
    }
  }

  @media screen and (min-width: 900px) {
    width: 10.375rem;

    & h2 {
      font-weight: 700;
      font-size: 1rem;
    }

    & ul li {
      font-size: 0.875rem;
    }
  }
`;

export default ArticleStyled;
