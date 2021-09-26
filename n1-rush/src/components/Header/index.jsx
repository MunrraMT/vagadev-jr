import HeaderStyled from './styles';

import Cart from '../Cart';
import BtnIconHamburguer from '../IconHamburguer';

const Header = () => (
  <HeaderStyled>
    <BtnIconHamburguer />

    <img
      src="./svg/Logo_N1_Rush_fundo_escuro_bg_tranparente 1.svg"
      alt="Logo do N1 Rush"
      aria-label="Logo do N1 Rush"
    />

    <section>
      <img
        src="./svg/paper-plane.svg"
        alt="Botão para Compartilhar Link"
        aria-label="Botão para Compartilhar Link"
      />
      <img
        src="./svg/search-solid.svg"
        alt="Botão buscar jogo por nome"
        aria-label="Botão buscar jogo por nome"
      />

      <Cart />
    </section>
  </HeaderStyled>
);

export default Header;
