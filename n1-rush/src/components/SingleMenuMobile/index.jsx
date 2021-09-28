import { arrayOf, shape, string } from 'prop-types';

import ArticleStyled from './styles';

const SingleMenuMobile = ({ content }) => (
  <ArticleStyled>
    <h2>{content.title}</h2>
    <ul>
      {content.list.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  </ArticleStyled>
);

SingleMenuMobile.propTypes = {
  content: shape({ title: string, list: arrayOf(string) }).isRequired,
};

export default SingleMenuMobile;
