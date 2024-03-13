import { useContext, createContext, useReducer, useEffect } from 'react';
import filter_reducer from '../reducer/filter_reducer';
import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  PRODUCT_GRID_VIEW,
  PRODUCT_LIST_VIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from '../action';
import authFetch from '../axios/custom';
import { useProductContext } from './Product_context';

const initialState = {
  filtered_products: [],
  all_product: [],
  isGridView: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};
const FilterContext = createContext();
export const useFilterContext = () => useContext(FilterContext);

const Filter_context = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, initialState);
  const { allProduct } = useProductContext();

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
    // console.log(state.filtered_products);
  }, [allProduct, state.sort, state.filters]);

  const gridView = () => {
    dispatch({ type: PRODUCT_GRID_VIEW });
  };
  const listView = () => {
    dispatch({ type: PRODUCT_LIST_VIEW });
  };
  const updateSort = (e) => {
    // const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'color') {
      value = e.target.dataset.color;
    }
    if (name === 'price') {
      value = parseInt(value);
    }
    if (name === 'shipping') {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        gridView,
        listView,
        updateSort,
        dispatch,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export default Filter_context;
