import styled from 'styled-components';

const SectionStyled = styled.section`
  display: flex;
  align-items: center;

  & img {
    margin-right: 0.938rem;
  }

  & h2 {
    color: var(--color-dark-blue);

    font-family: 'Roboto';
    font-weight: 300;
    font-size: 1.125rem;
  }
`;

export default SectionStyled;
