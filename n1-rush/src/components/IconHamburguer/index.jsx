import { useContext } from 'react';

import IconHamburguer from './styles';

import Context from '../../providers/Context';
import IconBar from './styles/IconBar';

const BtnIconHamburguer = () => {
  const { isOpenMenu, setIsOpenMenu } = useContext(Context);

  const handleClick = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <IconHamburguer
      type="button"
      aria-label="Botão de menu"
      onClick={handleClick}
    >
      <IconBar isOpenMenu={isOpenMenu} />
    </IconHamburguer>
  );
};

export default BtnIconHamburguer;
