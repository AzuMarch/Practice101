import React from 'react';
//import HooksExample from 'pages/HooksExample';
import Catalog from 'pages/Catalog';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import View from './pages/View';
import Cart from './pages/Cart';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const App = () => {

  return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/view">
            <View />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;

