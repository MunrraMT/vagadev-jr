import { string } from 'prop-types';

import SectionStyled from './styles';

const TitleSection = ({ title }) => (
  <SectionStyled>
    <img
      width="18"
      height="18"
      src="./svg/little-boxes.svg"
      alt="Icone de tópico"
    />
    <h2>{title}</h2>
  </SectionStyled>
);

TitleSection.propTypes = {
  title: string.isRequired,
};

export default TitleSection;
