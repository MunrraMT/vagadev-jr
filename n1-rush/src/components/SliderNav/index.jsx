import { number, string } from 'prop-types';

import SectionStyled from './styles';

const SliderNav = ({ nameActual, numberActual, maxLength }) => (
  <SectionStyled>
    <header>
      <h3>{nameActual}</h3>
      <span />
    </header>

    <section>
      <p>
        {numberActual} / {maxLength}
      </p>

      <section className="actions-slidernav">
        <button
          type="button"
          aria-label="Mostrar jogo anterior no banner principal"
        >
          <img
            width="11"
            height="18"
            src="./svg/small-angle-left-solid.svg"
            alt="Mostrar jogo em destaque anterior"
          />
        </button>

        <button
          type="button"
          aria-label="Mostrar próximo jogo no banner principal"
        >
          <img
            width="11"
            height="18"
            src="./svg/small-angle-right-solid.svg"
            alt="Mostrar próximo jogo em destaque"
          />
        </button>
      </section>
    </section>
  </SectionStyled>
);

SliderNav.propTypes = {
  nameActual: string.isRequired,
  numberActual: number.isRequired,
  maxLength: number.isRequired,
};

export default SliderNav;
