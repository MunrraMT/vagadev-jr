import SectionStyled from './styles';

import SingleMiddleBanner from '../SingleMiddleBanner';

const MiddleBanners = () => (
  <SectionStyled>
    <SingleMiddleBanner
      name="The Legend of Zelda - Breath of th wild"
      webp="./webp/zelda_banner.webp"
      webp2x="./webp/zelda_banner-2x.webp"
      png="./png/zelda_banner.png"
      png2x="./png/zelda_banner-2x.png"
    />

    <SingleMiddleBanner
      name="SEKIRO - Shadows die twice"
      webp="./webp/sekiro_banner.webp"
      webp2x="./webp/sekiro_banner-2x.webp"
      png="./png/sekiro_banner.png"
      png2x="./png/sekiro_banner-2x.png"
    />
  </SectionStyled>
);

export default MiddleBanners;
