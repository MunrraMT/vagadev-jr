import { useState } from 'react';

import { node } from 'prop-types';

import Context from './Context';

const ContextProvider = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isClickedBuy, setIsClickedBuy] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  return (
    <Context.Provider
      value={{
        isOpenMenu,
        setIsOpenMenu,
        isClickedBuy,
        setIsClickedBuy,
        isDesktop,
        setIsDesktop,
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
