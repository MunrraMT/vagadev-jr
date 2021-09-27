import { useContext } from 'react';

import Context from '../../providers/Context';
import IconHamburguer from './styles';
import BtnSingleBar from './styles/BtnSingleBar';

const BtnIconHamburguer = () => {
  const { setIsOpenMenu } = useContext(Context);

  const handleClick = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <IconHamburguer
      type="button"
      aria-label="Botão de menu"
      onClick={handleClick}
    >
      <BtnSingleBar />
      <BtnSingleBar />
      <BtnSingleBar />
    </IconHamburguer>
  );
};

export default BtnIconHamburguer;
