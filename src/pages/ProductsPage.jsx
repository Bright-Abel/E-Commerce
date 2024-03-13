import styled from 'styled-components';
import { Filters, Sort, ProductList, PageHero } from '../components';
import authFetch from '../axios/custom';

export const loader = async ({ request }) => {
  // console.log(request);
  const { data } = await authFetch.get('/react-store-products');
  return { data };
};

const ProductsPage = () => {
  return (
    <Wrapper className="page">
      <PageHero title="product" />
      <div className="section-center products">
        <Filters />

        <div>
          <Sort />
          <ProductList />
        </div>
      </div>
    </Wrapper>
  );
};
export default ProductsPage;

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;
