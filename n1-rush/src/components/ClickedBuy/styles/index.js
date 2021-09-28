import styled from 'styled-components';

const SectionStyled = styled.section`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  background-color: var(--color-black-transparent);
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  & article {
    height: 31.25rem;

    background-color: white;
    border-radius: 0.313rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    & h2 {
      font-family: var(--font-family);
      font-weight: 300;
      font-size: 1.875rem;

      text-align: center;
      padding-left: 2.813rem;
      padding-right: 3.375rem;
    }

    & button {
      order: -1;

      width: 3.125rem;
      height: 3.125rem;

      align-self: flex-end;

      border: none;
      background: none;
      cursor: pointer;

      & img {
        width: 100%;
        height: 100%;
      }
    }

    & picture {
      width: 13.563rem;
      height: 17.438rem;
    }
  }
`;

export default SectionStyled;
