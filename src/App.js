import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js';
import ConnectedGrocery from './Inventory.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
<h1>Grocery Store</h1>
<ConnectedGrocery hello="Narf"/>
      </Provider>
    );
  }
}

export default App;
