import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatPrice } from '../axios/custom';
import { LiaGreaterThanSolid } from 'react-icons/lia';
4;
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Product = ({ product, title, id }) => {
  return (
    <Wrapper>
      <div className="title1">
        <h3>{title}</h3>
      </div>
      <div className="con-cards">
        {product.map((data) => {
          const { image, id, name, price } = data;
          return (
            <div className="myDiv" key={id}>
              <div className="card">
                <div className="con-image">
                  <img src={image} alt={image.filename} className="img" />
                  <Link to={`/products/${id}`} className="link ">
                    Explore
                  </Link>
                </div>
              </div>
              <footer>
                <h5>{name}</h5>
                <p>{formatPrice(price)}</p>
              </footer>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default Product;
const Wrapper = styled.section`
  height: auto;

  .title1 {
    padding: 5px 0.5rem;
    text-align: center;
  }
  a {
    font-size: 1rem;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90px;
    transition: var(--transition);
    &:hover {
      color: #71717a;
    }
    svg {
      font-size: 0.8rem;
    }
  }
  .con-cards {
    display: flex;
    align-items: stretch;
    gap: 10px;
    justify-content: flex-start;
    overflow: auto;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 30px;

    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }
  .con-cards::-webkit-scrollbar {
    height: 0px;
  }
  .myDiv {
    width: 33%;
    border-radius: 10px;
    transition: var(--transition);
    &:hover {
      box-shadow: var(--dark-shadow);
    }
  }
  .card {
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    position: relative;
    scroll-snap-align: center;
    transition: all 0.25s ease;
    display: grid;
    place-content: center;
  }

  .con-image {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    border-radius: 10px;
    position: relative;
  }
  .img {
    display: block;
    transition: var(--transition);
    width: 90%;
    height: 90%;
    object-fit: cover;
    border-radius: 10px;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    background: none;
    border: 5px solid #fce7f3;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-width: 0.4rem;

    border-bottom-style: dotted;

    display: grid;

    transform: translate(-50%, -50%);
    place-content: center;

    opacity: 0;
    &:hover {
      color: #fff;
    }
  }

  .con-image:hover img {
    opacity: 0.5;
  }
  .con-image:hover .link {
    opacity: 1;
  }

  footer h5,
  footer p {
    margin-top: 0.5rem;
    font-weight: 400;
    padding-left: 1rem;
    text-align: center;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }

  @media screen and (min-width: 500px) {
    .con-image {
      width: 150px;
    }
  }

  @media screen and (min-width: 768px) {
    .con-image {
      width: 200px;
    }
  }

  @media screen and (min-width: 992px) {
    .con-image {
      width: 299px;
    }
  }
`;
