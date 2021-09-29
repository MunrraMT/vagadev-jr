import { bool, func } from 'prop-types';

import SectionStyled from './styles';
import ArticleStyled from './styles/ArticleStyled';

const NavMenuDesktop = ({ scrolledPage, onMouseLeave }) => (
  <SectionStyled onMouseLeave={onMouseLeave} scrolledPage={scrolledPage}>
    <ArticleStyled>
      <h2>Luta</h2>
      <ul>
        <li>Mortal Kombat</li>
        <li>Smash Bros</li>
        <li>Killer Instict</li>
        <li>DBZ Kakarot</li>
      </ul>
    </ArticleStyled>
    <ArticleStyled>
      <h2>Ação / Aventura</h2>
      <ul>
        <li>GTA V</li>
        <li>Tomb Raider</li>
        <li>HALO</li>
        <li>Call of Duty</li>
      </ul>
    </ArticleStyled>
    <ArticleStyled>
      <h2>Corrida</h2>
      <ul>
        <li>NEED for SPEED</li>
        <li>Forza Horizon</li>
      </ul>
    </ArticleStyled>
  </SectionStyled>
);

NavMenuDesktop.propTypes = {
  scrolledPage: bool.isRequired,
  onMouseLeave: func.isRequired,
};

export default NavMenuDesktop;
