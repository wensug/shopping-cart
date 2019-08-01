import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header'
import Products from './components/products/Products'
import Cart from './components/cart/Cart'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
              <Route exact path='/' component={Products} />
              <Route exact path='/cart' component={Cart} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
