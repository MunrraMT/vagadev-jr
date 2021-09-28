/* eslint-disable no-return-assign */
import { useEffect } from 'react';

import SectionStyled from './styles';

import SingleMenuMobile from '../SingleMenuMobile';

const NavMenuMobile = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  return (
    <SectionStyled>
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

export default NavMenuMobile;
