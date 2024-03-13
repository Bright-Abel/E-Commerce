import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './index.css';
import '@splidejs/react-splide/css/core';
import Product_context from './CONTEXT API/Product_context.jsx';
import Filter_context from './CONTEXT API/Filter_context.jsx';
import Cart_context from './CONTEXT API/Cart_context.jsx';
import UserContext from './CONTEXT API/UserContext.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

// import { i } from 'vite/dist/node/types.d-jgA8ss1A.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-wao4b8kkqcd2hagy.us.auth0.com"
    clientId="F6HhNii9BNJS27jiaSlYuiwvHIzYFif6"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserContext>
      <Product_context>
        <Filter_context>
          <Cart_context>
            <App />
          </Cart_context>
        </Filter_context>
      </Product_context>
    </UserContext>
  </Auth0Provider>
);
