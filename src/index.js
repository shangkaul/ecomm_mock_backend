import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';
import Listing from './listing/Listing';
import Wishlist from './wishlist/Wishlist';
import Cart from './cart/Cart';
import { makeServer } from "./server";
import App from './App';
import { ProductFilterProvider } from './context/productFilterContext';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>

    <Router> 
      <ProductFilterProvider>
      <Nav />
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/listing" component={Listing}></Route>
        <Route exact path="/wishlist" component={Wishlist}></Route>
        <Route exact path="/cart" component={Cart}></Route>
      </Switch>
      </ProductFilterProvider>
    </Router>
    </React.StrictMode>,
  document.getElementById('root')
);
