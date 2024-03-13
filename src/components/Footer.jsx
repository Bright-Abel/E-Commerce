import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> E-commerce</span>
      </h5>

      <h5>All rights reserved</h5>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.footer`
  /* position: absolute;
  bottom: 0;
  width: 100%; */
  display: flex;
  flex-direction: column;
  background: var(--clr-black);
  height: 5rem;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  color: var(--clr-white);
  letter-spacing: var(--spacing);

  span {
    color: var(--clr-primary-5);
  }
  h5 {
    margin: 0.1rem;
    line-height: 1.25;
    font-weight: 400;
    /* text-transform: none; */
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
