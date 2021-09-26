import { number, string } from 'prop-types';

import FooterStyled from './styles';

const SliderNav = ({ nameActual, numberActual, maxLength }) => (
  <FooterStyled>
    <p>{nameActual}</p>
    <p>
      {numberActual}/{maxLength}
      <img
        width="10"
        height="17.87"
        src="./svg/angle-left-solid.svg"
        alt="Voltar um jogo no banner principal"
        aria-label="Voltar um jogo no banner principal"
      />
      <img
        width="10"
        height="17.87"
        src="./svg/angle-right-solid.svg"
        alt="Avançar um jogo no banner principal"
        aria-label="Avançar um jogo no banner principal"
      />
    </p>
  </FooterStyled>
);

SliderNav.propTypes = {
  nameActual: string.isRequired,
  numberActual: number.isRequired,
  maxLength: number.isRequired,
};

export default SliderNav;
