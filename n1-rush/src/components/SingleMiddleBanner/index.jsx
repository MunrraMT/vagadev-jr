import { string } from 'prop-types';

import ArticleStyled from './styles';

const SingleMiddleBanner = ({ name, img }) => (
  <ArticleStyled>
    <header>
      <h3>{name}</h3>
      <span />
    </header>

    <img
      src={img}
      alt={`Capa do jogo ${name}`}
      aria-label={`Capa do jogo ${name}`}
      width="335"
      height="191"
    />
  </ArticleStyled>
);

SingleMiddleBanner.propTypes = {
  name: string.isRequired,
  img: string.isRequired,
};

export default SingleMiddleBanner;
