import styled from 'styled-components';

const ArticleStyled = styled.article`
  height: 13.688rem;
  width: 100%;
  max-width: 35rem;

  background-color: var(--color-dark-blue);
  border-bottom-left-radius: 0.313rem;
  transition: all 0.3s;

  display: flex;
  flex-direction: column-reverse;

  &:hover {
    box-shadow: 10px 10px 4px var(--color-black-transparent);
  }

  & header {
    background-color: var(--color-blue);
    margin-left: 0.368rem;
    padding-top: 0.357rem;
    padding-right: 0.851rem;
    padding-bottom: 0.375rem;
    padding-left: 0.625rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    & h3 {
      color: var(--color-dark-blue);
      white-space: nowrap;
      margin-right: 1rem;

      font-family: var(--font-family);
      font-weight: 700;
      font-size: 0.75rem;
    }

    & span {
      width: 100%;
      height: 0.125rem;

      background-color: var(--color-dark-blue);
    }
  }

  & picture {
    width: 100%;
    height: 100%;

    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;
    }
  }

  @media screen and (min-width: 600px) {
    height: 100%;

    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1200px) {
    height: 26.563rem;
    width: 39.188rem;

    margin: 0;

    & picture {
      height: 100%;

      & img {
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: center;
      }
    }
  }
`;

export default ArticleStyled;
