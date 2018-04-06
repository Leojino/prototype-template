import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Cart from './Cart';

class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
