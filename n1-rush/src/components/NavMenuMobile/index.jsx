import { useEffect, useState } from 'react';

import SectionStyled from './styles';
import ArticleStyled from './styles/ArticleStyled';

const NavMenuMobile = () => {
  const [isMoved, setIsMoved] = useState(window.pageYOffset > 75);

  const handleScroll = () => {
    setIsMoved(window.pageYOffset > 75);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <SectionStyled scrolledPage={isMoved}>
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
};

export default NavMenuMobile;
