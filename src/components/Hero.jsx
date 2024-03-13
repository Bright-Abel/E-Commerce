import { Link } from 'react-router-dom';
import image1 from '../assets/hero-bcg.jpeg';
import image2 from '../assets/hero-bcg-2.jpeg';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          design your
          <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nam. Non
          error excepturi ex? Reprehenderit, ipsa tempore quaerat sequi, et modi
          praesentium laboriosam, iure debitis architecto explicabo tempora.
          Quae dolore deserunt rerum hic blanditiis odit consectetur accusamus
          cum dolor at?
        </p>
        <Link to="/products" className="btn hero-btn">
          explore products
        </Link>
      </article>
      <article className="img-container">
        <img src={image1} alt="nice table" className="main-img" />
        <img src={image2} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  );
};
export default Hero;
const Wrapper = styled.section`
  display: grid;
  place-content: center;
  min-height: 60vh;
  gap: 8rem;

  .content p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  .img-container {
    display: none;
  }
  .hero-btn {
    background-image: linear-gradient(
      to right,
      var(--clr-primary-5) 50%,
      transparent 50%
    );
    background-position: 100% 0%;
    background-size: 200% 100%;
    transition: 1s;
    &:hover {
      background-position: 0% 100%;
    }
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;

    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }

    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 90%;
      height: 500px;
      object-fit: cover;
      border-radius: 5px;
      display: block;
      position: relative;
    }
    .accent-img {
      position: absolute;
      width: 250px;
      transform: translateX(-50%);
      bottom: 0;
      left: 0;
      border-radius: 5px;
    }
    .img-container::before {
      content: ' ';
      position: absolute;
      width: 50%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      transform: translateX(-20%);
      border-radius: 5px;
    }
    .content {
      margin-top: 6rem;
    }
  }
`;
