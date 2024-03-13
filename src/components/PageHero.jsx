import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';}

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to="/products"> / Product</Link>} / {title}
        </h3>
      </div>
    </Wrapper>
  );
};
export default PageHero;

const Wrapper = styled.section`
  background-color: var(--clr-primary-10);
  height: 20vh;
  display: flex;
  align-items: center;
  width: 100%;
  h3 {
    color: var(--clr-primary-1);
  }
  a {
    color: var(--clr-primary-3);
    transition: var(--transition);
    &:hover {
      color: var(--clr-primary-1);
    }
  }
`;
