import SectionStyled from './styles';

import TitleSection from '../TitleSection';
import SingleBestProduct from '../SingleBestProduct';

const BestProducts = () => (
  <SectionStyled>
    <TitleSection title="Produtos em destaque" />

    <section>
      <button
        className="btn-left"
        type="button"
        aria-label="Mostrar jogo em destaque anterior"
      >
        <img
          width="15"
          height="27"
          src="./svg/big-angle-left-solid.svg"
          alt="Mostrar jogo em destaque anterior"
        />
      </button>

      <SingleBestProduct
        name="otriders"
        price={20000}
        img="./webp/product-outriders.webp"
      />

      <button
        className="btn-right"
        type="button"
        aria-label="Mostrar próximo jogo em destaque"
      >
        <img
          width="15"
          height="27"
          src="./svg/big-angle-right-solid.svg"
          alt="Mostrar próximo jogo em destaque"
        />
      </button>
    </section>
  </SectionStyled>
);

export default BestProducts;
