import { useEffect, useState } from 'react';

import { arrayOf, number, shape, string } from 'prop-types';

import SingleBestProduct from '../SingleBestProduct';

const ProductSlider = ({ productList }) => {
  const [index, setIndex] = useState(0);
  const [stopAutoPlay, setStopAutoPlay] = useState(false);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setIndex((prev) => {
        if (prev === productList.length - 1) return 0;

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

  return (
    <section>
      <button
        className="btn-left"
        type="button"
        aria-label="Mostrar jogo em destaque anterior"
        onClick={handleClickPrev}
      >
        <img
          width="15"
          height="27"
          src="./svg/big-angle-left-solid.svg"
          alt="Mostrar jogo em destaque anterior"
        />
      </button>

      <SingleBestProduct
        name={productList[index].name}
        price={productList[index].price}
        webp={productList[index].img.webp}
        png={productList[index].img.png}
      />

      <button
        className="btn-right"
        type="button"
        aria-label="Mostrar próximo jogo em destaque"
        onClick={handleClickNext}
      >
        <img
          width="15"
          height="27"
          src="./svg/big-angle-right-solid.svg"
          alt="Mostrar próximo jogo em destaque"
        />
      </button>
    </section>
  );
};

ProductSlider.propTypes = {
  productList: arrayOf(
    shape({
      name: string,
      price: number,
      img: {
        png: string,
        webp: string,
      },
    }),
  ).isRequired,
};

export default ProductSlider;
