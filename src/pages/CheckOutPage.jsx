import styled from 'styled-components';
import PageHero from '../components/PageHero';
import { redirect } from 'react-router-dom';

export const loader = (myUser) => () => {
  // console.log(myUser);
  if (!myUser) {
    // toast.warn('You must logging before checking out');
    return redirect('/');
  }
  return null;
};

const CheckOutPage = () => {
  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper>
        <h1>Checkout page</h1>
      </Wrapper>
    </main>
  );
};
export default CheckOutPage;

const Wrapper = styled.div``;
