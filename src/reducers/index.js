import cart from './cart.js';
import products from './products.js';
import { combineReducers } from 'redux';

const allReducers = combineReducers({cart, products});

export default allReducers;