import styled from 'styled-components';

const ArticleStyled = styled.article`
  background-color: #ffffff;
  box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.07);
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

    font-family: 'Roboto';

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
      background-color: #3ec6e0;
      color: #ffffff;
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
    border-bottom: 2px solid #3ec6e0;
    padding-top: 1.521rem;
    padding-bottom: 0.676rem;
  }
`;

export default ArticleStyled;
