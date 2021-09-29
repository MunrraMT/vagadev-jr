import { useContext } from 'react';

import { number, string } from 'prop-types';

import ArticleStyled from './styles';

import Context from '../../providers/Context';
import priceFormatter from '../../utils/price-formatter';

const SingleBestProduct = ({ name, price, webp, png }) => {
  const { setIsClickedBuy, setCartShop, cartShop } = useContext(Context);

  const handleClickBuy = () => {
    setIsClickedBuy((prev) => !prev);
    setCartShop((prev) => [...prev, name]);
  };

  return (
    <ArticleStyled>
      <header>
        <h3>{name.length > 25 ? `${name.slice(0, 25)}...` : name}</h3>
        <p>{priceFormatter(price)}</p>

        {cartShop.indexOf(name) >= 0 ? (
          <button className="btn-comprado" type="button">
            comprado!{' '}
            <picture>
              <source srcSet="./webp/small-mario.webp" type="image/webp" />
              <img
                width="68"
                height="79"
                src="./png/small-mario.png"
                alt="Imagem de compra feita"
              />
            </picture>{' '}
          </button>
        ) : (
          <button type="button" onClick={handleClickBuy}>
            comprar
          </button>
        )}
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
};

SingleBestProduct.propTypes = {
  name: string.isRequired,
  price: number.isRequired,
  webp: string.isRequired,
  png: string.isRequired,
};

export default SingleBestProduct;
