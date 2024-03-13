import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  AboutPage,
  AuthWrapper,
  CartPage,
  CheckOutPage,
  ErrorPage,
  HomePage,
  Landing,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
} from './pages';
import { Error } from './components';

import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProductPage';
import { loader as productPageLoader } from './pages/ProductsPage';
import { loader as checkoutLoader } from './pages/CheckOutPage';
// import UserContext from './CONTEXT API/UserContext';
import { useUserContext } from './CONTEXT API/UserContext';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Landing />,
//         errorElement: <Error />,
//         loader: landingLoader,
//       },
//       {
//         path: 'about',
//         element: <AboutPage />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: 'cart',
//         element: <CartPage />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: 'products',
//         element: <ProductsPage />,
//         errorElement: <ErrorPage />,
//         loader: productPageLoader,
//       },
//       {
//         path: 'products/:id',
//         element: <SingleProductPage />,
//         errorElement: <Error />,
//         loader: singleProductLoader,
//       },
//       {
//         path: 'checkout',
//         element: <CheckOutPage />, //<PrivateRoute element={<CheckOutPage />} />,
//         errorElement: <Error />,
//         loader: checkoutLoader,
//       },
//     ],
//   },
// ]);

const App = () => {
  const { myUser } = useUserContext();
  return (
    <>
      <AuthWrapper>
        <RouterProvider
          router={createBrowserRouter([
            {
              path: '/',
              element: <HomePage />,
              errorElement: <ErrorPage />,
              children: [
                {
                  index: true,
                  element: <Landing />,
                  errorElement: <Error />,
                  loader: landingLoader,
                },
                {
                  path: 'about',
                  element: <AboutPage />,
                  errorElement: <ErrorPage />,
                },
                {
                  path: 'cart',
                  element: <CartPage />,
                  errorElement: <ErrorPage />,
                },
                {
                  path: 'products',
                  element: <ProductsPage />,
                  errorElement: <ErrorPage />,
                  loader: productPageLoader,
                },
                {
                  path: 'products/:id',
                  element: <SingleProductPage />,
                  errorElement: <Error />,
                  loader: singleProductLoader,
                },
                {
                  path: 'checkout',
                  element: <CheckOutPage />, //<PrivateRoute element={<CheckOutPage />} />,
                  errorElement: <Error />,
                  loader: checkoutLoader(myUser),
                },
              ],
            },
          ])}
        />
      </AuthWrapper>
    </>
  );
};
export default App;
