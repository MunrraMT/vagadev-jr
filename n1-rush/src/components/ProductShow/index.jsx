import { arrayOf, number, shape, string } from 'prop-types';

import SectionStyled from './styles';

import SingleBestProduct from '../SingleBestProduct';

const ProductShow = ({ productList }) => (
  <SectionStyled>
    {productList.map((product) => (
      <SingleBestProduct
        key={product.id}
        name={product.name}
        price={product.price}
        webp={product.img.webp}
        png={product.img.png}
      />
    ))}
  </SectionStyled>
);

ProductShow.propTypes = {
  productList: arrayOf(
    shape({
      id: number,
      name: string,
      price: number,
      img: shape({
        png: string,
        webp: string,
      }),
    }),
  ).isRequired,
};

export default ProductShow;
