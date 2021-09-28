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
    width: 78.375rem;
    height: 26.563rem;

    padding: 0;
    margin-top: -9.313rem;
    margin-bottom: 5.5rem;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & article:first-child {
      margin: 0;
      margin-right: 1.25rem;
    }
  }
`;

export default SectionStyled;
