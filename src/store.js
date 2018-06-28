import { createStore } from 'redux';
import grocerycart from './reducers';

var store = createStore(grocerycart);

export default store;