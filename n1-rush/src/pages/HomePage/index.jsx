import { useContext } from 'react';

import MiddleBanners from '../../components/MiddleBanners';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import BestProducts from '../../components/BestProducts';
import Footer from '../../components/Footer';
import NavMenuMobile from '../../components/NavMenuMobile';
import Context from '../../providers/Context';
import ClickBuy from '../../components/ClickedBuy';

const HomePage = () => {
  const { isOpenMenu, isClickedBuy } = useContext(Context);

  return (
    <>
      <Header />
      {isOpenMenu && <NavMenuMobile />}
      {isClickedBuy && <ClickBuy />}

      <main>
        <Hero />
        <MiddleBanners />
        <BestProducts />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
