import { number, string } from 'prop-types';

import ArticleStyled from './styles';

const SingleBanner = ({
  name,
  price,
  description,
  webp,
  webp2x,
  png,
  png2x,
}) => (
  <ArticleStyled>
    <header>
      <h2>{name}</h2>
      <h3>
        <span>R$ {String(price).slice(0, -2)}</span>
        <span>,{String(price).slice(-2)}</span>
      </h3>
      <p>{description}</p>
    </header>

    <picture>
      <source srcSet={`${webp2x} 2x, ${webp}`} type="image/webp" />
      <img
        srcSet={`${png2x} 2x`}
        src={png}
        alt={`Capa do jogo ${name}`}
        aria-label={`Capa do jogo ${name}`}
      />
    </picture>
  </ArticleStyled>
);

SingleBanner.propTypes = {
  name: string.isRequired,
  price: number.isRequired,
  description: string.isRequired,
  webp: string.isRequired,
  webp2x: string.isRequired,
  png: string.isRequired,
  png2x: string.isRequired,
};

export default SingleBanner;
