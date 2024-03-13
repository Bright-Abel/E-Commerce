import PageHero from '../components/PageHero';
import image from '../assets/hero-bcg.jpeg';
import styled from 'styled-components';

const AboutPage = () => {
  return (
    <main>
      <PageHero title="About" />
      <Wrapper className="page section section-center">
        <img src={image} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            blanditiis incidunt id sunt necessitatibus repellendus, ea sapiente
            veniam dolorem velit non asperiores dolorum laudantium voluptatem
            consequatur! Vel rerum delectus odio natus, ducimus amet, dolores
            sed repudiandae, quisquam voluptatibus obcaecati? Dicta quae officia
            soluta sequi animi minus quam nam architecto culpa quod eius natus,
            optio, facilis sit autem tempore itaque numquam libero minima
            repudiandae officiis consequatur doloribus. Cumque rem laudantium
            rerum?
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
export default AboutPage;

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: 5px;
    height: 500px;
    object-fit: cover;
  }
  article p {
    line-height: 2;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    margin: 0 auto;
    max-width: 45em;
    margin-top: 2rem;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin: 0;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
