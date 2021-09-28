import { string } from 'prop-types';

import ButtonStyled from './styles';

const BtnHeader = ({ text, img }) => (
  <ButtonStyled type="button" aria-label={`Botão para ${text}`}>
    <img width="26" height="21" src={img} alt={`Botão para ${text}`} />
    <p>{text}</p>
  </ButtonStyled>
);

BtnHeader.propTypes = {
  text: string.isRequired,
  img: string.isRequired,
};

export default BtnHeader;
