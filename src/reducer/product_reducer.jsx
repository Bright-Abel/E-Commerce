import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../action';

const product_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };
      break;
    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };
      break;

    case GET_PRODUCTS_BEGIN:
      return { ...state, products_loading: true };
      break;
    case GET_PRODUCTS_SUCCESS:
      const featured_products = action.payload.filter(
        (products) => products.featured === true
      );
      return {
        ...state,
        products_loading: false,
        featured_products,
        allProduct: action.payload,
      };
      break;
    case GET_PRODUCTS_ERROR:
      return { ...state, products_loading: false, products_error: true };
      break;
    default:
      throw new Error(`No Matching "${action.type}" - acton type`);
      break;
  }
  //   if (action.type === SIDEBAR_OPEN) {
  //     return { ...state, isSidebarOpen: true };
  //   }
  //   if (action.type === SIDEBAR_CLOSE) {
  //     return { ...state, isSidebarOpen: false };
  //   }
  //   if (action.type === PRODUCT_GRID_VIEW) {
  //     return { ...state, isGridView: true };
  //   }
  //   if (action.type === PRODUCT_LIST_VIEW) {
  //     return { ...state, isGridView: false };
  //   }

  //   throw new Error(`No Matching "${action.type}" - acton type`);
};

export default product_reducer;
