import {
  PRODUCT_GRID_VIEW,
  PRODUCT_LIST_VIEW,
  LOAD_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_SORT,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../action';
const filter_reducer = (state, action) => {
  switch (action.type) {
    case PRODUCT_GRID_VIEW:
      return { ...state, isGridView: true };
      break;
    case PRODUCT_LIST_VIEW:
      return { ...state, isGridView: false };
      break;
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
      break;
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((product) => product.price);
      maxPrice = Math.max(...maxPrice);

      return {
        ...state,
        all_product: action.payload,
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
      break;
    case SORT_PRODUCTS:
      const { sort, filtered_products } = state;
      // let all_product_copy = [...state.all_product];
      let tempProducts = [];
      // console.log(filtered_products);

      switch (sort) {
        case 'price-lowest':
          tempProducts = filtered_products.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case 'price-highest':
          tempProducts = filtered_products.sort((a, b) => {
            return b.price - a.price;
          });
          break;
        case 'name-a':
          tempProducts = filtered_products.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          break;
        case 'name-z':
          tempProducts = filtered_products.sort((a, b) =>
            b.name.localeCompare(a.name)
          );
          return { ...state, filtered_products: tempProducts };
          break;

        default:
          break;
      }
      return { ...state };
      break;
    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
      break;

    case FILTER_PRODUCTS:
      const { all_product } = state;
      const { text, category, company, color, price, shipping } = state.filters;
      let tempProduct = [...all_product];

      //   FILTERING
      // SEARCH
      if (text) {
        tempProduct = tempProduct.filter((product) => {
          return product.name.toLowerCase().startsWith(text.toLowerCase()); //startsWith or includes
        });
      }
      // CATEGORY

      if (category !== 'all') {
        tempProduct = tempProduct.filter((product) => {
          return product.category === category;
        });
      }

      // COMPANY
      if (company !== 'all') {
        tempProduct = tempProduct.filter((product) => {
          return product.company === company;
        });
      }
      // COLOR
      if (color !== 'all') {
        tempProduct = tempProduct.filter((product) => {
          return product.colors.find((c) => c === color);
        });
      }

      // PRICE
      if (price !== 'all') {
        tempProduct = tempProduct.filter((product) => {
          return product.price <= price;
        });
      }
      // SHIPPING
      if (shipping) {
        tempProduct = tempProduct.filter((product) => {
          return product.shipping === true;
        });
      }

      return { ...state, filtered_products: tempProduct };
      break;
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          company: 'all',
          category: 'all',
          color: 'all',

          price: state.filters.max_price,
          shipping: false,
        },
      };
      break;

    default:
      throw new Error(`No Matching "${action.type}" - acton type`);
      break;
  }
};
export default filter_reducer;
