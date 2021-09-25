import IconHamburguer from './styles';
import BtnSingleBar from './styles/BtnSingleBar';

const BtnIconHamburguer = () => (
  <IconHamburguer type="button" aria-label="Botão de menu">
    <BtnSingleBar />
    <BtnSingleBar />
    <BtnSingleBar />
  </IconHamburguer>
);

export default BtnIconHamburguer;
