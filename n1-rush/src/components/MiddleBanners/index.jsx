import { useEffect, useState } from 'react';

import SectionStyled from './styles';

import SingleMiddleBanner from '../SingleMiddleBanner';
import Loading from '../Loading';

const MiddleBanners = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('./BackEnd/db-middle-banner.json')
      .then((response) => response.json())
      .then(({ products }) => setProductList(products));
  }, []);

  return (
    <SectionStyled>
      {productList.length === 0 && <Loading />}

      {productList.length > 0 &&
        productList.map((product) => (
          <SingleMiddleBanner
            key={product.id}
            name={product.name}
            webp={product.img.mobile.webp}
            desktopWebp={product.img.desktop.webp}
            png={product.img.mobile.png}
            desktopPng={product.img.desktop.png}
          />
        ))}
    </SectionStyled>
  );
};

export default MiddleBanners;
