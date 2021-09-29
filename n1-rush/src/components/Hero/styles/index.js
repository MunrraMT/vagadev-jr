import styled from 'styled-components';

const SectionStyled = styled.section`
  & section.principal-banner-container {
    height: 27.25rem;
    width: 100%;

    position: relative;

    background-color: var(--color-dark-blue);

    & article {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }

    & article.activeSlide {
      opacity: 1;
      transform: translateX(0);
    }

    & article.lastSlide {
      transform: translateX(-100%);
    }

    & article.nextSlide {
      transform: translateX(100%);
    }
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & section.principal-banner-container {
      height: 52.5rem;
    }
  }
`;

export default SectionStyled;
