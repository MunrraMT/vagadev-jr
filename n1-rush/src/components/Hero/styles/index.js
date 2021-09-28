import styled from 'styled-components';

const SectionStyled = styled.section`
  @media screen and (min-width: 1200px) {
    position: relative;

    & section {
      position: absolute;
      top: 50%;
      right: 0;

      transform: translateY(-50%);
    }
  }
`;

export default SectionStyled;
