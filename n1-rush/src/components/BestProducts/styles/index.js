import styled from 'styled-components';

const SectionStyled = styled.section`
  margin-bottom: 8.125rem;

  & section:first-child {
    padding-left: 1.375rem;
  }

  & section:not(:first-child) {
    padding-top: 1.938rem;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    & .btn-left,
    & .btn-right {
      width: 4.313rem;
      height: 6rem;

      border: none;
      background: none;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 90%;
    max-width: 79.625rem;

    margin-left: auto;
    margin-right: auto;
  }
`;

export default SectionStyled;
