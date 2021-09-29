import { useState } from 'react';

import { node } from 'prop-types';

import Context from './Context';

const ContextProvider = ({ children }) => {
  const [cartShop, setCartShop] = useState([]);

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isClickedBuy, setIsClickedBuy] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const [indexPrincipalBanner, setIndexPrincipalBanner] = useState(0);

  return (
    <Context.Provider
      value={{
        isOpenMenu,
        setIsOpenMenu,
        isClickedBuy,
        setIsClickedBuy,
        cartShop,
        setCartShop,
        isDesktop,
        setIsDesktop,
        indexPrincipalBanner,
        setIndexPrincipalBanner,
      }}
    >
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: node.isRequired,
};

export default ContextProvider;
