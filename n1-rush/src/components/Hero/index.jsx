import SectionStyled from './styles';

import SinglePrincipalBanner from '../SinglePrincipalBanner';
import SliderNav from '../SliderNav';

const Hero = () => (
  <SectionStyled>
    <SinglePrincipalBanner
      name="mortal kombat"
      price={29999}
      description="Mortal Kombat X combina uma apresentação cinemática única com uma
        jogabilidade totalmente nova. Os jogadores podem escolher pela primeira
        vez diversas variantes de cada personagem, afetando tanto a estratégia
        como o estilo de luta."
      webp="./webp/principal_banner_mobile_1.webp"
      png="./png/principal_banner_mobile_1.png"
      bigPng="./png/principal_banner_tablet_1.png"
      bigWebp="./webp/principal_banner_tablet_1.webp"
      desktopPng="./png/principal_banner_desktop_1.png"
      desktopWebp="./webp/principal_banner_desktop_1.webp"
    />

    <SliderNav nameActual="mortal kombat" numberActual={1} maxLength={2} />
  </SectionStyled>
);

export default Hero;
