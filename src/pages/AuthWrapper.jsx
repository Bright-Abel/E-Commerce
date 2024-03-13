import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <Wrapper>
        <div className="loading"></div>
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }
  return <div>{children}</div>;
};
export default AuthWrapper;

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-content: center;
`;
