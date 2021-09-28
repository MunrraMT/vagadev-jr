/* eslint-disable no-return-assign */

import { useContext, useEffect } from 'react';

import SectionStyled from './styles';

import Context from '../../providers/Context';
import SingleMenuMobile from '../SingleMenuMobile';

const NavMenu = () => {
  const { isDesktop, setIsOpenMenu } = useContext(Context);

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
    <SectionStyled onMouseLeave={handleMouseLeave}>
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
