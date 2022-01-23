import { combineReducers } from 'redux';
import AIEs from './AIEs';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
	AIEs,
	errors,
	messages,
	auth
});