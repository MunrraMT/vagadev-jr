import MiddleBanners from '../../components/MiddleBanners';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import BestProducts from '../../components/BestProducts';
import Footer from '../../components/Footer';

const HomePage = () => (
  <>
    <Header />

    <main>
      <Hero />
      <MiddleBanners />
      <BestProducts />
    </main>

    <Footer />
  </>
);

export default HomePage;
