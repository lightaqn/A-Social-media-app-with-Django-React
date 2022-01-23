import { CREATE_MESSAGE, GET_ERRORS } from './constants';

//CREATE MESSAGE
export const createMessage = msg => {
	return {
		type: CREATE_MESSAGE,
		payload: msg
	};
};

// RETURN ERRORS
export const returnErrors = (msg, status) => {
	return {
		type: GET_ERRORS,
		payload: {msg, status}
	};
};