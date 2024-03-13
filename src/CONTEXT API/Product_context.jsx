import { createContext, useContext, useEffect, useReducer } from 'react';
// import product_reducer from '../reducer/product_reducer';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../action';
import product_reducer from '../reducer/product_reducer';
import authFetch from '../axios/custom';

const initialState = {
  isSidebarOpen: false,
};

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

const Product_context = ({ children }) => {
  const [state, dispatch] = useReducer(product_reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  // const fetchProduct = async () => {
  //   dispatch({ type: GET_PRODUCTS_BEGIN });
  //   try {
  //     const resp = await authFetch.get('/react-store-products');
  //     const products = resp.data;
  //     console.log(products);
  //     dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
  //   } catch (error) {
  //     dispatch({ type: GET_PRODUCTS_ERROR });
  //   }
  // };

  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  return (
    <ProductContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductContext.Provider>
  );
};
export default Product_context;

// export const useProductContext = () => {
//   return useContext(ProductContext);
// };
