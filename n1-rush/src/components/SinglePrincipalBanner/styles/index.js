import styled from 'styled-components';

const ArticleStyled = styled.article`
  width: 100%;
  height: 27.25rem;

  color: var(--color-white);
  font-family: var(--font-family);
  text-align: right;
  position: relative;
  transition: all 0.3s;

  display: flex;
  flex-direction: column-reverse;

  & header {
    width: 100%;

    height: 13.375rem;
    padding: 0.875rem 1.813rem;
    background-color: var(--color-black-transparent);
    transition: all 0.3s;
  }

  & header h2 {
    font-weight: 900;
    font-size: 1.625rem;
    text-transform: uppercase;
    transition: all 0.3s;
  }

  & header h3 {
    font-weight: 900;
    color: var(--color-blue);

    display: flex;
    justify-content: right;
    transition: all 0.3s;

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
    font-weight: 400;
    margin-left: auto;
    transition: all 0.3s;
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
      transition: all 0.3s;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 100vw;
    height: 52.5rem;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;

    & header {
      position: absolute;
      top: 13.063rem;
      right: 15%;

      background: none;
    }

    & header h2 {
      font-size: 2.875rem;
    }

    & header h3 {
      & span:first-child {
        font-size: 4.375rem;
      }

      & span:last-child {
        font-size: 1.75rem;
        margin-top: 10px;
      }
    }

    & header p {
      font-size: 1rem;

      margin-left: auto;
      max-width: 26.25rem;
    }

    & picture {
      width: 100%;
      height: 52.5rem;

      & img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (min-width: 1450px) {
    & header {
      right: 25.26%;
    }
  }
`;

export default ArticleStyled;
