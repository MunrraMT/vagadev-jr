import { useContext, useState, useEffect } from 'react';
import SectionStyled from './styles';

import TitleSection from '../TitleSection';
import Context from '../../providers/Context';
import ProductSlider from '../ProductSlider';
import Loading from '../Loading';

const BestProducts = () => {
  const [productList, setProductList] = useState([]);
  const { isDesktop } = useContext(Context);

  useEffect(() => {
    fetch('./BackEnd/db-best-products.json')
      .then((response) => response.json())
      .then(({ products }) => setProductList(products));
  }, []);

  return (
    <SectionStyled>
      <TitleSection title="Produtos em destaque" />

      {productList.length === 0 && <Loading />}

      {isDesktop && productList.length > 0 && <p>É desktop!</p>}

      {!isDesktop && productList.length > 0 && (
        <ProductSlider productList={productList} />
      )}
    </SectionStyled>
  );
};

export default BestProducts;
