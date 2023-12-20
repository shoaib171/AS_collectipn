/** @format */
import HandleCart from './Reducers/HandleCart';

import { combineReducers } from 'redux';
import AuthReducer from './Reducers/AuthReducer';
import ContactReducers from './Reducers/ContactReducers';
const RootReducer = combineReducers({
	HandleCart,
	AuthReducer,
	ContactReducers,
});
export default RootReducer;
