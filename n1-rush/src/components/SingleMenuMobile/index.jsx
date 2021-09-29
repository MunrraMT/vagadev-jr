import { arrayOf, shape, string } from 'prop-types';

import ArticleStyled from './styles';

const SingleMenuMobile = ({ content }) => (
  <ArticleStyled>
    <h2>{content.title}</h2>
    <ul>
      {content.list.map((item) => (
        <li key={item.id}>{item}</li>
      ))}
    </ul>
  </ArticleStyled>
);

SingleMenuMobile.propTypes = {
  content: shape({ id: string, title: string, list: arrayOf(string) })
    .isRequired,
};

export default SingleMenuMobile;
