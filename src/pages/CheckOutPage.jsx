import styled from 'styled-components';
import PageHero from '../components/PageHero';
import { redirect } from 'react-router-dom';
import { StripeCheckout } from '../components';

import { useCartContext } from '../CONTEXT API/Cart_context';
import { Link } from 'react-router-dom';

export const loader = (myUser) => () => {
  // console.log(myUser);
  if (!myUser) {
    // toast.warn('You must logging before checking out');
    return redirect('/');
  }
  return null;
};

const CheckOutPage = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your class is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};
export default CheckOutPage;

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  .empty {
    text-align: center;
  }
`;
