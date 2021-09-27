import H1Styled from './styles';

const TitlePage = () => (
  <H1Styled>
    <a href="/">
      N1 Rush
      <picture>
        <source
          srcSet="./webp/Logo_N1_Rush_fundo_escuro_bg_tranparente 1.webp"
          type="image/webp"
        />
        <img
          width="107"
          height="23"
          src="./png/Logo_N1_Rush_fundo_escuro_bg_tranparente 1.png"
          alt="Logo do N1 Rush"
          aria-label="Logo do N1 Rush"
        />
      </picture>
    </a>
  </H1Styled>
);

export default TitlePage;
