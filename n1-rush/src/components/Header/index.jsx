import { useContext, useEffect, useState } from 'react';

import HeaderStyled from './styles';

import Context from '../../providers/Context';
import Cart from '../Cart';
import BtnIconHamburguer from '../IconHamburguer';
import TitlePage from '../TitlePage';
import BtnHeader from '../BtnHeader';

const Header = () => {
  const [isMoved, setIsMoved] = useState(false);

  const { isOpenMenu, isDesktop } = useContext(Context);

  const handleScroll = () => {
    setIsMoved(window.pageYOffset > 75);
  };

  const handleScrolledPage = () => {
    if (isDesktop && isOpenMenu && !isMoved) return false;
    if (isDesktop && isOpenMenu) return true;
    if (isOpenMenu) return false;
    if (isMoved) return true;

    return false;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderStyled scrolledPage={handleScrolledPage()}>
      <BtnIconHamburguer />
      <TitlePage />

      <section>
        <BtnHeader text="contato" img="./svg/paper-plane.svg" />
        <BtnHeader text="buscar" img="./svg/search-solid.svg" />
        <Cart />
      </section>
    </HeaderStyled>
  );
};

export default Header;
