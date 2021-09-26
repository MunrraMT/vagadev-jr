import styled from 'styled-components';

const H1Styled = styled.h1`
  & a {
    text-decoration: none;
    color: transparent;
    font-size: 0;

    img {
      width: auto;
      height: auto;
    }
  }
`;

export default H1Styled;
