import styled from 'styled-components';

const ArticleStyled = styled.article`
  width: 100%;
  height: 27.25rem;

  color: var(--color-white);
  font-family: 'Roboto';
  text-align: right;
  position: relative;

  display: flex;
  flex-direction: column-reverse;

  & header {
    width: 100%;

    height: 13.375rem;
    padding: 0.875rem 1.813rem;
    background-color: var(--color-black-transparent);
  }

  & header h2 {
    font-weight: 900;
    font-size: 1.625rem;
    text-transform: uppercase;
  }

  & header h3 {
    font-weight: 900;
    color: var(--color-blue);

    display: flex;
    justify-content: right;

    & span:first-child {
      font-size: 3rem;
    }

    & span:last-child {
      font-size: 1.75rem;
      margin-top: 5px;
    }
  }

  & header p {
    font-size: 0.75rem;
  }

  & picture {
    height: 100%;
    width: 100%;

    overflow: hidden;
    position: absolute;
    z-index: -1;

    & img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;
    }
  }
`;

export default ArticleStyled;
