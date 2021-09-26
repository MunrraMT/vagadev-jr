import MiddleBanners from '../../components/MiddleBanners';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import BestProducts from '../../components/BestProducts';

const HomePage = () => (
  <>
    <Header />

    <main>
      <Hero />
      <MiddleBanners />
      <BestProducts />
    </main>
  </>
);

export default HomePage;
