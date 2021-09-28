/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useContext } from 'react';

import SectionStyled from './styles';

import Context from '../../providers/Context';

const ClickedBuy = () => {
  const { setIsClickedBuy } = useContext(Context);

  const handleClick = () => {
    setIsClickedBuy((prev) => !prev);
  };

  return (
    <SectionStyled onClick={handleClick}>
      <article onClick={(e) => e.stopPropagation()}>
        <h2>Pedido realizado com sucesso!</h2>

        <button
          type="button"
          aria-label="Clique para fechar aviso de pedido realizado"
          onClick={handleClick}
        >
          <img
            width="35"
            height="35"
            src="./svg/close-btn.svg"
            alt="Botão para fechar modal de pedido realizado"
          />
        </button>

        <picture>
          <source
            srcSet="./webp/mario-2x.webp 2x, ./webp/mario.webp"
            type="image/webp"
          />
          <img
            width="217"
            height="279"
            srcSet="./png/mario-2x.png 2x"
            src="./png/mario.png"
            alt="Personagem Mário"
            aria-label="Personagem Mário"
          />
        </picture>
      </article>
    </SectionStyled>
  );
};

export default ClickedBuy;
