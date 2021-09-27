import { number, string } from 'prop-types';

import ArticleStyled from './styles';

import priceFormatter from '../../utils/price-formatter';

const SingleBestProduct = ({ name, price, webp, webp2x, png, png2x }) => (
  <ArticleStyled>
    <header>
      <h3>{name}</h3>
      <p>{priceFormatter(price)}</p>
      <button type="button">comprar</button>
    </header>

    <picture>
      <source srcSet={`${webp2x} 2x, ${webp}`} type="image/webp" />
      <img
        width="237"
        height="245"
        srcSet={`${png2x} 2x`}
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
  webp2x: string.isRequired,
  png: string.isRequired,
  png2x: string.isRequired,
};

export default SingleBestProduct;
