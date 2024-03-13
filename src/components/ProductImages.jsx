import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import Splide from '@splidejs/splide';

const ProductImages = ({ images }) => {
  const [mainImg, setMainImg] = useState(images[0]);

  const mainRef = useRef(null);
  const thumbsRef = useRef(null);
  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  return (
    <Wrapper>
      <Splide
        options={{
          type: 'loop',
          perPage: 2,
          perMove: 1,
          gap: '1rem',
          pagination: false,
          height: '20rem',

          // heightRatio: 1,
          // pagination: false,
          // rewind: true,
          // arrows: false,
          // cover: true,
        }}
        ref={mainRef}
        id="main-carousel"
        className="splide"
      >
        {images.map((image, index) => {
          return (
            <SplideSlide key={index}>
              <img src={image.url} alt={image.filename} />
            </SplideSlide>
          );
        })}
      </Splide>

      <Splide
        options={{
          type: 'slide',
          fixedWidth: 100,
          fixedHeight: 60,
          gap: 10,
          rewind: true,
          isNavigation: true,
          pagination: false,
          focus: 'center',
          breakpoints: {
            600: {
              fixedWidth: 60,
              fixedHeight: 44,
            },
          },
        }}
        id="thumbnail-carousel"
        ref={thumbsRef}
        className="splide"
      >
        {images.map((image, index) => {
          return (
            <SplideSlide key={index} className="splide-slide">
              <img src={image.url} alt={image.filename} />
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};

export default ProductImages;

const Wrapper = styled.section`
  .splide__slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .splide__slide {
    opacity: 0.8;
  }

  .splide {
    width: 100%;
    object-fit: cover;
  }

  .splide__slide.is-active {
    opacity: 1;
    border: 1px solid #f1f5f8;
  }
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;
