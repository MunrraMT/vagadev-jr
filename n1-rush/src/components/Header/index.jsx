import HeaderStyled from './styles';

import Cart from '../Cart';
import BtnIconHamburguer from '../IconHamburguer';
import TitlePage from '../TitlePage';

const Header = () => (
  <HeaderStyled>
    <BtnIconHamburguer />
    <TitlePage />

    <section>
      <img
        width="26.06"
        height="21.31"
        src="./svg/paper-plane.svg"
        alt="Botão para Compartilhar Link"
        aria-label="Botão para Compartilhar Link"
      />

      <img
        width="25.73"
        height="25.72"
        src="./svg/search-solid.svg"
        alt="Botão buscar jogo por nome"
        aria-label="Botão buscar jogo por nome"
      />

      <Cart />
    </section>
  </HeaderStyled>
);

export default Header;
