import { useContext, useState } from 'react';

import IconHamburguer from './styles';

import Context from '../../providers/Context';
import IconBar from './styles/IconBar';
import NavMenuDesktop from '../NavMenuDesktop';

const BtnIconHamburguer = () => {
  const { isOpenMenu, setIsOpenMenu, isDesktop, isMoved } = useContext(Context);

  const [openDesktopMenu, setOpenDesktopMenu] = useState(false);

  const handleClickMobileMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  const handleClickDesktopMenu = () => {
    setOpenDesktopMenu((prev) => !prev);
  };

  return isDesktop ? (
    <IconHamburguer
      type="button"
      aria-label="Botão de menu"
      onClick={handleClickDesktopMenu}
    >
      <IconBar />
      {openDesktopMenu && (
        <>
          <span className="tooltip-target" />
          <NavMenuDesktop
            onMouseLeave={handleClickDesktopMenu}
            scrolledPage={isMoved}
          />
        </>
      )}
    </IconHamburguer>
  ) : (
    <IconHamburguer
      type="button"
      aria-label="Botão de menu"
      onClick={handleClickMobileMenu}
    >
      <IconBar isOpenMenu={isOpenMenu} />
    </IconHamburguer>
  );
};

export default BtnIconHamburguer;
