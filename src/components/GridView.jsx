import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import ProductGrid from './ProductGrid';
import ProductGrid from './ProductGrid';

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return <ProductGrid key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};
export default GridView;

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
