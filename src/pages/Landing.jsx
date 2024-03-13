import { Services, Hero, FeaturedProducts, Contact } from '../components';
import authFetch from '../axios/custom';

export const loader = async () => {
  const { data } = await authFetch.get('/react-store-products');
  const featuredData = data.filter((val) => val.featured === true);
  // console.log(featuredData);
  // console.log(data);
  return { featuredData };
};
const Landing = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};
export default Landing;
