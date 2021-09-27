import { number, string } from 'prop-types';

import ArticleStyled from './styles';

import priceFormatter from '../../utils/price-formatter';

const SingleBestProduct = ({ name, price, img }) => (
  <ArticleStyled>
    <header>
      <h3>{name}</h3>
      <p>{priceFormatter(price)}</p>
      <button type="button">comprar</button>
    </header>
    <img
      src={img}
      alt={`Capa do jogo ${name}`}
      aria-label={`Capa do jogo ${name}`}
    />
  </ArticleStyled>
);

SingleBestProduct.propTypes = {
  name: string.isRequired,
  price: number.isRequired,
  img: string.isRequired,
};

export default SingleBestProduct;
