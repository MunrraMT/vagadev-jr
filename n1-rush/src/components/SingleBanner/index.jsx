import { number, string } from 'prop-types';

import ArticleStyled from './styles';

const SingleBanner = ({ name, price, description, img, altImg }) => (
  <ArticleStyled>
    <header>
      <h2>{name}</h2>
      <h3>
        <span>R$ {String(price).slice(0, -2)}</span>
        <span>,{String(price).slice(-2)}</span>
      </h3>
      <p>{description}</p>
    </header>
    <img src={img} alt={altImg} aria-label={altImg} />
  </ArticleStyled>
);

SingleBanner.propTypes = {
  name: string.isRequired,
  price: number.isRequired,
  description: string.isRequired,
  img: string.isRequired,
  altImg: string.isRequired,
};

export default SingleBanner;
