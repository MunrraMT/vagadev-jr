import { useContext } from 'react';

import ButtonStyled from './styles';

import Context from '../../providers/Context';

const Cart = () => {
  const { setIsClickedBuy } = useContext(Context);

  const handleClick = () => {
    setIsClickedBuy((prev) => !prev);
  };

  return (
    <ButtonStyled onClick={handleClick}>
      <img
        width="23.13"
        height="26"
        src="./svg/shopping-bag-solid.svg"
        alt="Botão mostrar o carrinho de compras"
        aria-label="Botão mostrar o carrinho de compras"
      />
      <p>2</p>
    </ButtonStyled>
  );
};

export default Cart;
