import styled from 'styled-components';

const ArticleStyled = styled.article`
  width: 100%;
  height: 100%;
  max-width: 21.875rem;
  max-height: 26.438rem;

  background-color: var(--color-white);
  box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.07);
  border-radius: 0.625rem;
  overflow: hidden;
  transition: all 0.3s;

  display: flex;
  flex-direction: column-reverse;

  &:hover {
    box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.3);
  }

  & header {
    width: 100%;
    height: 8.827rem;

    padding-top: 1.014rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 0.929rem;

    font-family: var(--font-family);

    display: flex;
    flex-direction: column;
    justify-content: center;

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
      width: 15rem;

      margin-left: auto;
      margin-right: auto;

      padding: 0.663rem 0;
      background-color: var(--color-blue);
      color: var(--color-white);
      border: none;
      border-radius: 0.313rem;
      text-transform: uppercase;
      cursor: pointer;

      font-weight: 900;
      font-size: 0.875rem;
    }

    & .btn-comprado {
      background-color: var(--color-dark-blue);
      padding-left: 1.125rem;
      position: relative;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      & picture {
        position: absolute;
        bottom: -3px;
        right: 0;

        & img {
          padding: 0;
          border: none;

          object-fit: cover;
          object-position: bottom;
        }
      }
    }
  }

  & img {
    width: 100%;
    height: 100%;

    max-height: 15.288rem;

    object-fit: contain;
    object-position: center;
    border-bottom: 2px solid var(--color-blue);
    padding-top: 1.521rem;
    padding-bottom: 0.676rem;
  }

  @media screen and (min-width: 900px) {
    max-width: 15rem;
  }

  @media screen and (min-width: 1200px) {
    max-width: 18rem;
  }

  @media screen and (min-width: 1500px) {
    max-width: 21.875rem;
    max-height: 37.625rem;

    & header {
      height: 11.563rem;
    }

    & img {
      max-height: 21.875rem;
      margin-top: 2.25rem;
      padding-bottom: 1rem;
    }
  }
`;

export default ArticleStyled;
