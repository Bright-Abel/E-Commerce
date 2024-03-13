import { Footer, Navbar, SideBar } from '../components';
import { Outlet } from 'react-router-dom';
const HomePage = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default HomePage;
