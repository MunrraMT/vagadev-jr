import { useEffect, useState } from 'react';

import HeaderStyled from './styles';

import Cart from '../Cart';
import BtnIconHamburguer from '../IconHamburguer';
import TitlePage from '../TitlePage';

const Header = () => {
  const [isMoved, setIsMoved] = useState(false);

  const handleScroll = () => {
    setIsMoved(window.pageYOffset > 75);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderStyled backGround={isMoved}>
      <BtnIconHamburguer />
      <TitlePage />

      <section>
        <img
          style={{ cursor: 'pointer' }}
          width="26.06"
          height="21.31"
          src="./svg/paper-plane.svg"
          alt="Botão para Compartilhar Link"
          aria-label="Botão para Compartilhar Link"
        />

        <img
          style={{ cursor: 'pointer' }}
          width="25.73"
          height="25.72"
          src="./svg/search-solid.svg"
          alt="Botão buscar jogo por nome"
          aria-label="Botão buscar jogo por nome"
        />

        <Cart />
      </section>
    </HeaderStyled>
  );
};

export default Header;
