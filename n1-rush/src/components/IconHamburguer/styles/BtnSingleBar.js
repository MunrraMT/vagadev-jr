import styled from 'styled-components';

const BtnSingleBar = styled.span`
  display: block;
  width: 1.875rem;
  height: 0.188rem;
  background-color: var(--color-white);
  border-radius: 10rem;

  &:last-child {
    width: 1.375rem;
  }

  &:not(:last-child) {
    margin-bottom: 0.466rem;
  }
`;

export default BtnSingleBar;
