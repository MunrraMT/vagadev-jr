import styled from 'styled-components';

const FooterStyled = styled.footer`
  width: 100%;
  height: 4.25rem;

  display: flex;
  flex-direction: row-reverse;

  & section:first-child {
    flex-grow: 2;

    background-color: var(--color-blue);
    color: var(--color-white);
    padding-top: 1.313rem;
    padding-bottom: 1.313rem;
    padding-left: 1.25rem;
    padding-bottom: 1.188rem;

    display: flex;
    align-items: center;

    & h4 {
      line-height: 0.879rem;

      font-family: 'Roboto', Verdana;
      font-weight: 400;
      font-size: 0.75rem;
    }
  }

  & section:last-child {
    width: 4.938rem;
    height: 4.25rem;

    background-color: var(--color-dark-blue);
    object-fit: cover;
    object-position: center;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default FooterStyled;
