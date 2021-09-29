import { useState } from 'react';

import { node } from 'prop-types';

import Context from './Context';

const ContextProvider = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isClickedBuy, setIsClickedBuy] = useState(false);
  const [cartShop, setCartShop] = useState(false);

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
