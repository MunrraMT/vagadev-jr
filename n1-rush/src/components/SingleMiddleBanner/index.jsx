import { string } from 'prop-types';

import ArticleStyled from './styles';

const SingleMiddleBanner = ({ name, webp, desktopWebp, png, desktopPng }) => (
  <ArticleStyled>
    <header>
      <h3>{name}</h3>
      <span />
    </header>

    <picture>
      <source
        srcSet={desktopWebp}
        type="image/webp"
        media="(min-width: 1200px)"
      />
      <source
        srcSet={desktopPng}
        type="image/png"
        media="(min-width: 1200px)"
      />

      <source srcSet={webp} type="image/webp" />
      <img
        width="335"
        height="191"
        src={png}
        alt={`Capa do jogo ${name}`}
        aria-label={`Capa do jogo ${name}`}
      />
    </picture>
  </ArticleStyled>
);

SingleMiddleBanner.propTypes = {
  name: string.isRequired,
  webp: string.isRequired,
  desktopWebp: string.isRequired,
  png: string.isRequired,
  desktopPng: string.isRequired,
};

export default SingleMiddleBanner;
