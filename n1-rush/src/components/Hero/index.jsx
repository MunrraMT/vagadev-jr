import { useEffect, useState } from 'react';

import SectionStyled from './styles';

import SliderNav from '../SliderNav';
import SinglePrincipalBanner from '../SinglePrincipalBanner';
import Loading from '../Loading';

const Hero = () => {
  const [productList, setProductList] = useState([]);
  const [index, setIndex] = useState(0);
  const [stopAutoPlay, setStopAutoPlay] = useState(false);

  useEffect(() => {
    fetch('./BackEnd/db-principal-banner.json')
      .then((response) => response.json())
      .then(({ products }) => setProductList(products));
  }, []);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setIndex((prev) => {
        if (prev >= productList.length - 1) {
          return 0;
        }

        return Number(prev) + 1;
      });
    }, 1800);

    if (stopAutoPlay) {
      clearInterval(autoPlay);
    }

    return () => {
      clearInterval(autoPlay);
    };
  }, [stopAutoPlay]);

  const handleClickNext = () => {
    if (index >= 0) setIndex((prev) => Number(prev) + 1);
    if (index === productList.length - 1) setIndex(0);

    setStopAutoPlay(true);
  };

  const handleClickPrev = () => {
    if (index <= productList.length - 1) setIndex((prev) => prev - 1);
    if (index === 0) setIndex(productList.length - 1);

    setStopAutoPlay(true);
  };

  return productList.length === 0 ? (
    <Loading />
  ) : (
    <SectionStyled>
      <section className="principal-banner-container">
        {productList.map((product, productIndex) => {
          const position = () => {
            if (productIndex === index) return 'activeSlide';

            if (
              (index === 0 && productIndex === productList.length - 1) ||
              productIndex === index - 1
            ) {
              return 'lastSlide';
            }

            return 'nextSlide';
          };

          return (
            <SinglePrincipalBanner
              key={product.id}
              position={position()}
              name={product.name}
              price={product.price}
              description={product.desc}
              webp={product.img.mobile.webp}
              png={product.img.mobile.png}
              bigPng={product.img.tablet.png}
              bigWebp={product.img.tablet.webp}
              desktopPng={product.img.desktop.png}
              desktopWebp={product.img.desktop.webp}
            />
          );
        })}
      </section>

      <SliderNav
        onClickNext={handleClickNext}
        onClickPrev={handleClickPrev}
        nameActual="mortal kombat"
        numberActual={index}
        maxLength={productList.length}
      />
    </SectionStyled>
  );
};

export default Hero;
