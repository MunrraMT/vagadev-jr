import { string } from 'prop-types';

import ArticleStyled from './styles';

const SingleMiddleBanner = ({ name, webp, webp2x, png, png2x }) => (
  <ArticleStyled>
    <header>
      <h3>{name}</h3>
      <span />
    </header>

    <picture>
      <source srcSet={`${webp2x} 2x, ${webp}`} type="image/webp" />
      <img
        width="335"
        height="191"
        srcSet={`${png2x} 2x`}
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
  webp2x: string.isRequired,
  png: string.isRequired,
  png2x: string.isRequired,
};

export default SingleMiddleBanner;
