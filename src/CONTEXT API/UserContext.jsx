import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const userContext = createContext();
export const useUserContext = () => useContext(userContext);

const UserContext = ({ children }) => {
  const { loginWithRedirect, logout, user } = useAuth0();

  const [myUser, setMyUser] = useState(true);

  useEffect(() => {
    setMyUser(user);
  }, [user]);

  return (
    <userContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </userContext.Provider>
  );
};
export default UserContext;
