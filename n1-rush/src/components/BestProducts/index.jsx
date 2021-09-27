import SectionStyled from './styles';

import TitleSection from '../TitleSection';
import SingleBestProduct from '../SingleBestProduct';

const BestProducts = () => (
  <SectionStyled>
    <TitleSection title="Produtos em destaque" />

    <section>
      <SingleBestProduct
        name="otriders"
        price={20000}
        img="./webp/product-outriders.webp"
      />
    </section>
  </SectionStyled>
);

export default BestProducts;
