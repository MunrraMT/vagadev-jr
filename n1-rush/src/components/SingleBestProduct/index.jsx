import { number, string } from 'prop-types';

import ArticleStyled from './styles';

import priceFormatter from '../../utils/price-formatter';

const SingleBestProduct = ({ name, price, webp, png }) => (
  <ArticleStyled>
    <header>
      <h3>{name.length > 25 ? `${name.slice(0, 25)}...` : name}</h3>
      <p>{priceFormatter(price)}</p>
      <button type="button">comprar</button>
    </header>

    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        width="237"
        height="245"
        src={png}
        alt={`Capa do jogo ${name}`}
        aria-label={`Capa do jogo ${name}`}
      />
    </picture>
  </ArticleStyled>
);

SingleBestProduct.propTypes = {
  name: string.isRequired,
  price: number.isRequired,
  webp: string.isRequired,
  png: string.isRequired,
};

export default SingleBestProduct;
