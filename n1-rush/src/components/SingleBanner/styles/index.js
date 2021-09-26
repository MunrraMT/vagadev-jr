import styled from 'styled-components';

const ArticleStyled = styled.article`
  color: #ffffff;
  font-family: 'Roboto';
  text-align: right;
  width: 100%;
  height: 27.25rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & header {
    width: 100%;
    height: 13.375rem;
    padding: 0.875rem 1.813rem;
    background-color: rgba(0, 0, 0, 0.65);
  }

  & header h2 {
    font-weight: 900;
    font-size: 1.625rem;
    text-transform: uppercase;
  }

  & header h3 {
    font-weight: 900;
    color: #3ec6e0;

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

  & img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export default ArticleStyled;
