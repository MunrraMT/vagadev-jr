import { useContext } from 'react';

import SectionStyled from './styles';

import MiddleBanners from '../../components/MiddleBanners';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import BestProducts from '../../components/BestProducts';
import Footer from '../../components/Footer';
import NavMenu from '../../components/NavMenu';
import Context from '../../providers/Context';
import ClickBuy from '../../components/ClickedBuy';

const HomePage = () => {
  const { isOpenMenu, isClickedBuy } = useContext(Context);

  return (
    <SectionStyled>
      <Header />
      {isOpenMenu && <NavMenu />}
      {isClickedBuy && <ClickBuy />}

      <main>
        <Hero />
        <MiddleBanners />
        <BestProducts />
      </main>

      <Footer />
    </SectionStyled>
  );
};

export default HomePage;
