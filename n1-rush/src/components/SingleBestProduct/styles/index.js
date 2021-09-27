import styled from 'styled-components';

const ArticleStyled = styled.article`
  width: 100%;

  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
  border-radius: 0.625rem;
  overflow: hidden;

  display: flex;
  flex-direction: column-reverse;

  & header {
    width: 100%;

    padding-top: 1.014rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 0.929rem;

    font-family: var(--font-family);

    display: flex;
    flex-direction: column;

    & h3 {
      text-transform: capitalize;

      font-weight: 400;
      font-size: 0.875rem;
    }

    & p {
      margin-top: 1.063rem;
      margin-bottom: 1.625rem;

      font-weight: 900;
      font-size: 1.125rem;
    }

    & button {
      margin: 0 2.323rem;
      height: 2.196rem;
      background-color: var(--color-blue);
      color: var(--color-white);
      border: none;
      border-radius: 0.313rem;
      text-transform: uppercase;

      font-weight: 900;
      font-size: 0.875rem;
    }
  }

  & img {
    width: 100%;
    height: 100%;

    object-fit: contain;
    object-position: center;
    border-bottom: 2px solid var(--color-blue);
    padding-top: 1.521rem;
    padding-bottom: 0.676rem;
  }
`;

export default ArticleStyled;
