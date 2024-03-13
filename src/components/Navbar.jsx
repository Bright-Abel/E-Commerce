import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FaBars } from 'react-icons/fa';
import links from '../utils/data';
import styled from 'styled-components';
import CartButton from './CartButton';
import { useProductContext } from '../CONTEXT API/Product_context';
import { useUserContext } from '../CONTEXT API/UserContext';

const Navbar = () => {
  const data = useProductContext();
  const { myUser } = useUserContext();
  const { openSidebar } = data;
  //   console.log(data);
  return (
    <NavCont>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo img" />
          </Link>

          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          {links.map((link) => {
            const { url, text, id } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <CartButton />
      </div>
    </NavCont>
  );
};
export default Navbar;

const NavCont = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  /* a {
    position: relative;
  }
  a::after {
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 0%;
    height: -0.5rem;
    background: var(--clr-primary-5);
    transition: width 0.7s linear;
    &:hover {
      width: 100%;
    }
  } */
  .nav-center {
    margin: 0 auto;
    width: 90vw;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 175px;
      /* margin-left: -15px; */
    }
  }
  .nav-toggle {
    background: transparent;
    color: var(--clr-primary-5);
    border-color: transparent;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      display: flex;

      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: flex;
    }
  }
`;
