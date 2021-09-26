import styled from 'styled-components';

const FooterStyled = styled.footer`
  width: 100%;
  height: 3.25rem;
  text-transform: uppercase;
  font-family: 'Roboto';
  font-size: 0.875;
  font-weight: 400;
  color: #ffffff;

  display: flex;

  & h3 {
    flex-grow: 2;
    background-color: #3ec6e0;
    padding: 1.125rem 1.375rem;
    border-bottom-left-radius: 0.625rem;
  }

  & p:last-child {
    width: 8.75rem;
    background-color: #084154;
    padding: 1.125rem;

    display: flex;
    justify-content: space-between;
  }
`;

export default FooterStyled;
