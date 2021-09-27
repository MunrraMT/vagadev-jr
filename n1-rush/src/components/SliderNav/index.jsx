import { number, string } from 'prop-types';

import SectionStyled from './styles';

import AngleSolid from '../SvgComponent/AngleSolid';

const SliderNav = ({ nameActual, numberActual, maxLength }) => (
  <SectionStyled>
    <h3>{nameActual}</h3>

    <section>
      <p>
        {numberActual} / {maxLength}
      </p>

      <button
        type="button"
        aria-label="Mostrar jogo anterior no banner principal"
      >
        <AngleSolid left color="#ffffff" />
      </button>

      <button
        type="button"
        aria-label="Mostrar próximo jogo no banner principal"
      >
        <AngleSolid color="#ffffff" />
      </button>
    </section>
  </SectionStyled>
);

SliderNav.propTypes = {
  nameActual: string.isRequired,
  numberActual: number.isRequired,
  maxLength: number.isRequired,
};

export default SliderNav;
