/* eslint-disable react/no-array-index-key */

import { arrayOf, shape, string } from 'prop-types';

import ArticleStyled from './styles';

const SingleMenuMobile = ({ content }) => (
  <ArticleStyled>
    <h2>{content.title}</h2>
    <ul>
      {content.list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </ArticleStyled>
);

SingleMenuMobile.propTypes = {
  content: shape({ title: string, list: arrayOf(string) }).isRequired,
};

export default SingleMenuMobile;
