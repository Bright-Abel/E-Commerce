import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from './Loading';
import Product from './Product';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useProductContext } from '../CONTEXT API/Product_context';

const FeaturedProducts = () => {
  const { featuredData } = useLoaderData();
  // console.log(featuredData);
  const { state } = useNavigation();
  const navigation = state === 'loading';
  // const {
  //   products_loading: loading,
  //   products_error: error,
  //   featured_products: featuredData,
  // } = useProductContext();
  // console.log(featuredData);
  if (navigation) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="section-center featured">
        <Product product={featuredData} title="Featured Product" />
      </div>
      <Link to="/products" className="btn explore">
        all products
      </Link>
    </Wrapper>
  );
};
export default FeaturedProducts;
const Wrapper = styled.section`
  background: var(--clr-primary-10);
  /* background: #fce7f3; */
  margin-bottom: 1rem;
  padding: 2rem 0;
  .featured {
    background: #fce7f3;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-bottom: 2rem;
  }

  .title1 {
    background: #fee2e2;
    padding: 0.2rem;
    margin-bottom: 0.9rem;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
`;
