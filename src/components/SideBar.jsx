import styled from 'styled-components';
import logo from '../assets/logo.svg';
import links from '../utils/data';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import { useProductContext } from '../CONTEXT API/Product_context';
import { useUserContext } from '../CONTEXT API/UserContext';

const SideBar = () => {
  const { closeSidebar, isSidebarOpen } = useProductContext();
  const { myUser } = useUserContext();
  return (
    <Wrapper>
      <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className="sidebar-header">
          <img src={logo} alt="store logo" className="logo" />
          <button type="button" className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;

            return (
              <li key={id} onClick={closeSidebar}>
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
      </aside>
    </Wrapper>
  );
};
export default SideBar;

const Wrapper = styled.div`
  /* text-align: center; */
  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      color: var(--clr-red-light);
    }
  }
  .logo {
    justify-self: center;
    height: 45px;
  }

  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
    &:hover {
      /* padding: 1rem 1.5rem; */
      padding-left: 2rem;
      background: var(--clr-grey-10);
      color: var(--clr-grey-2);
    }
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: translateX(-100%);
    background: var(--clr-white);
    transition: var(--transition);
    z-index: -1;
  }
  .show-sidebar {
    transform: translateX(0);
    z-index: 1000;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;
