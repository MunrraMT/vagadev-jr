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
    justify-content: space-evenly;

    & .btn-left,
    & .btn-right {
      width: 2.5rem;
      height: 4rem;

      border: none;
      background: none;
      cursor: pointer;
    }
  }
`;

export default SectionStyled;
