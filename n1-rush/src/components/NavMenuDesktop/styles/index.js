import styled from 'styled-components';

const SectionStyled = styled.section`
  width: 35.313rem;
  height: 15.563rem;

  position: absolute;
  top: ${(props) => (props.scrolledPage ? '3.25rem' : '3.25rem')};
  left: -2.5rem;
  z-index: 5;

  padding-top: 2.813rem;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
  padding-bottom: 2.625rem;

  text-align: left;
  border-radius: 0.313rem;
  border: 2px solid var(--color-blue);
  box-shadow: 10px 10px var(--color-blue);
  background-color: var(--color-dark-blue);
  transition: all 0.3s;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default SectionStyled;
