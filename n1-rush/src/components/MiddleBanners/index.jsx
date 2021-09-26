import SectionStyled from './styles';

import SingleMiddleBanner from '../SingleMiddleBanner';

const MiddleBanners = () => (
  <SectionStyled>
    <SingleMiddleBanner
      name="The Legend of Zelda - Breath of th wild"
      img="./webp/zelda_banner.webp"
    />

    <SingleMiddleBanner
      name="SEKIRO - Shadows die twice"
      img="./webp/sekiro_banner.webp"
    />
  </SectionStyled>
);

export default MiddleBanners;
