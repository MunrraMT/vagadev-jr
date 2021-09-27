import SingleBanner from '../SingleBanner';
import SliderNav from '../SliderNav';

const Hero = () => (
  <section>
    <SingleBanner
      name="mortal kombat"
      price={29999}
      description="Mortal Kombat X combina uma apresentação cinemática única com uma
        jogabilidade totalmente nova. Os jogadores podem escolher pela primeira
        vez diversas variantes de cada personagem, afetando tanto a estratégia
        como o estilo de luta."
      img="./webp/principal_banner_mobile 1.webp"
      altImg="Capa do Jogo Mortal Kombat"
    />

    <SliderNav nameActual="mortal kombat" numberActual={1} maxLength={2} />
  </section>
);

export default Hero;
