import { Link, useLoaderData } from 'react-router-dom';
import authFetch, { formatPrice } from '../axios/custom';
import styled from 'styled-components';
import { PageHero } from '../components';
import ProductImages from '../components/ProductImages';
import Stars from '../components/Stars';
import AddToCart from '../components/AddToCart';
// `
export const loader = async (data) => {
  // console.log(data);
  const id = data.params.id;
  // console.log(id);
  const resp = await authFetch.get(`/react-store-single-product?id=${id}`);
  const product = resp.data;

  return { product };
};
const SingleProductPage = () => {
  const { product } = useLoaderData();
  // console.log(product);
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    company,
    images,
    id: sku,
  } = product;
  return (
    <Wrapper>
      <PageHero title={name} product="products" />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />

          <section className="content">
            <h2>{name}</h2>

            <Stars stars={stars} reviews={reviews} />

            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <hr style={{ marginBottom: '2rem' }} />

            <p className="info">
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p>

            <p className="info">
              <span>Sku : </span>
              {sku}
            </p>

            <p className="info">
              <span>Brand : </span>
              {company}
            </p>

            <hr style={{ marginBottom: '2rem' }} />

            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};
export default SingleProductPage;

const Wrapper = styled.section`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }

  .info {
    text-transform: capitalize;
    display: grid;
    grid-template-columns: 125px 1fr;
    width: 300px;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      /* align-items: center; */
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;
