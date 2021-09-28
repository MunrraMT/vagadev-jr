/* eslint-disable no-return-assign */

import { useContext, useEffect, useState } from 'react';

import SectionStyled from './styles';

import Context from '../../providers/Context';
import SingleMenuMobile from '../SingleMenuMobile';

const NavMenu = () => {
  const [isMoved, setIsMoved] = useState(false);

  const { isDesktop, setIsOpenMenu } = useContext(Context);

  const handleScroll = () => {
    setIsMoved(window.pageYOffset > 75);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      document.body.style.overflow = 'hidden';
    }
    return () => (document.body.style.overflow = 'unset');
  }, [isDesktop]);

  const handleMouseLeave = () => {
    if (isDesktop) {
      setIsOpenMenu((prev) => !prev);
    }
  };

  return (
    <SectionStyled scrolledPage={isMoved} onMouseLeave={handleMouseLeave}>
      <SingleMenuMobile
        content={{
          title: 'Luta',
          list: [
            'Mortal Kombat',
            'Smash Bros',
            'Killer Instict',
            'DBZ Kakarot',
          ],
        }}
      />

      <SingleMenuMobile
        content={{
          title: 'Ação / Aventura',
          list: ['GTA V', 'Tomb Raider', 'HALO', 'Call of Duty'],
        }}
      />

      <SingleMenuMobile
        content={{
          title: 'Corrida',
          list: ['NEED for SPEED', 'Forza Horizon'],
        }}
      />
    </SectionStyled>
  );
};

export default NavMenu;
