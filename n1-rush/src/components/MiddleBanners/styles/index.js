import styled from 'styled-components';

const SectionStyled = styled.section`
  padding-top: 1.563rem;
  padding-left: 1.314rem;
  padding-right: 1.188rem;
  padding-bottom: 2.625rem;

  & article:not(:last-child) {
    margin-bottom: 0.625rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: -9.313rem;
    margin-bottom: 5.5rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  @media screen and (min-width: 1500px) {
    max-width: 79.625rem;
    height: 26.563rem;

    justify-content: space-between;

    & article:first-child {
      margin: 0;
    }
  }
`;

export default SectionStyled;
