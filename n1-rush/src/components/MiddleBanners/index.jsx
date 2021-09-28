import SectionStyled from './styles';

import SingleMiddleBanner from '../SingleMiddleBanner';

const MiddleBanners = () => (
  <SectionStyled>
    <SingleMiddleBanner
      name="The Legend of Zelda - Breath of th wild"
      webp="./webp/zelda_banner.webp"
      desktopWebp="./webp/zelda_banner-desktop.webp"
      png="./png/zelda_banner.png"
      desktopPng="./png/zelda_banner-desktop.png"
    />

    <SingleMiddleBanner
      name="SEKIRO - Shadows die twice"
      webp="./webp/sekiro_banner.webp"
      desktopWebp="./webp/sekiro_banner-desktop.webp"
      png="./png/sekiro_banner.png"
      desktopPng="./png/sekiro_banner-desktop.png"
    />
  </SectionStyled>
);

export default MiddleBanners;
