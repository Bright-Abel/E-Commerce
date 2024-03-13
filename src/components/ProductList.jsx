import CartegoryView from './CartegoryView';
import GridView from './GridView';
import ListView from './ListView';
import { useLoaderData } from 'react-router-dom';
import { useProductContext } from '../CONTEXT API/Product_context';
import { useFilterContext } from '../CONTEXT API/Filter_context';
import { useEffect } from 'react';
import { LOAD_PRODUCTS } from '../action';

const ProductList = () => {
  const { data } = useLoaderData();
  const { isGridView, dispatch, filtered_products } = useFilterContext();
  // const {} = useProductContext();

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: data });
  }, []);
  // const { allProduct: data } = useProductContext();

  if (filtered_products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no product match your search...
      </h5>
    );
  }

  if (isGridView) {
    return <GridView products={filtered_products} />;
  }
  return (
    <div>
      <ListView products={filtered_products} />
      {/* <CartegoryView products={data} /> */}
    </div>
  );
};
export default ProductList;
