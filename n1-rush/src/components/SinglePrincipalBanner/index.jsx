import { number, string } from 'prop-types';

import ArticleStyled from './styles';

const SinglePrincipalBanner = ({
  name,
  price,
  description,
  webp,
  png,
  bigWebp,
  bigPng,
  desktopWebp,
  desktopPng,
  position,
}) => (
  <ArticleStyled className={position}>
    <header>
      <h2>{name}</h2>
      <h3>
        <span>R$ {String(price).slice(0, -2)}</span>
        <span>,{String(price).slice(-2)}</span>
      </h3>
      <p>{description}</p>
    </header>

    <picture>
      <source
        srcSet={desktopWebp}
        type="image/webp"
        media="(min-width: 900px)"
      />
      <source srcSet={desktopPng} type="image/png" media="(min-width: 900px)" />

      <source srcSet={bigWebp} type="image/webp" media="(min-width: 600px)" />
      <source srcSet={bigPng} type="image/png" media="(min-width: 600px)" />

      <source srcSet={webp} type="image/webp" />
      <img
        src={png}
        alt={`Capa do jogo ${name}`}
        aria-label={`Capa do jogo ${name}`}
      />
    </picture>
  </ArticleStyled>
);

SinglePrincipalBanner.propTypes = {
  name: string.isRequired,
  price: number.isRequired,
  description: string.isRequired,
  webp: string.isRequired,
  png: string.isRequired,
  bigWebp: string.isRequired,
  bigPng: string.isRequired,
  desktopWebp: string.isRequired,
  desktopPng: string.isRequired,
  position: string.isRequired,
};

export default SinglePrincipalBanner;
