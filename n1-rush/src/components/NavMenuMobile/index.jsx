/* eslint-disable no-return-assign */
import { useEffect } from 'react';

import SectionStyled from './styles';

const NavMenuMobile = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  return <SectionStyled>teste</SectionStyled>;
};

export default NavMenuMobile;
