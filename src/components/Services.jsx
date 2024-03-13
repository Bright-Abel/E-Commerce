import styled from 'styled-components';
import { services } from '../utils/data';

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            custom funiture <br />
            built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            quia natus quisquam ipsum non magnam voluptatibus repudiandae!
            Eveniet, error architecto!
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
export default Services;

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  padding: 5rem 0;
  .header p {
    max-width: 100%;
  }
  h3 {
    margin-bottom: 2rem;
  }
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }

  .services-center {
    display: grid;
    gap: 2.5rem;
    margin-top: 4rem;
  }
  .service {
    background: var(--clr-primary-7);
    border-radius: 5px;
    text-align: center;
    padding: 2.5rem 2rem;
    p {
      color: var(--clr-primary-2);
    }
  }
  .icon {
    background: var(--clr-primary-10);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: grid;
    place-content: center;
    margin: 0 auto;
    margin-bottom: 0.7rem;
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
