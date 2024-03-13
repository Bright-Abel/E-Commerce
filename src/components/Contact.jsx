import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            vel, eum veniam corporis esse dolore qui sapiente saepe itaque
            velit. Dolorem voluptate at nostrum iusto id maiores laborum
            aliquid. Dolorum sunt reiciendis fugiat ipsam laboriosam nobis rerum
            amet recusandae commodi?
          </p>
          <form
            action="https://formspree.io/f/mnqevvdy"
            method="POST"
            className="contact-form"
          >
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
              name="email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Contact;

const Wrapper = styled.section`
  /* margin-top: 5rem; */

  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
    margin-top: 1rem;
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }

  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    .contact-form {
      margin-top: 0;
    }
  }
  p {
    margin-bottom: 0;
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;
