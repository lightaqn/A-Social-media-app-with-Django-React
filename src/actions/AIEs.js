import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth'
import { GET_AIES, DELETE_AIE, ADD_AIE } from './constants';

// GET AIES
export const getAIEs = () => (dispatch, getState) => {
	axios.get('/api/AIEs/', tokenConfig(getState))
	.then(res => {
		dispatch({
			type: GET_AIES,
			payload: res.data
		});
	})
	.catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// DELETE AIE
export const deleteAIE = id => (dispatch, getState) => {
	axios.delete(`/api/AIEs/${id}/`, tokenConfig(getState))
	.then(res => {
		dispatch(createMessage({ deleteAIE: 'Contact Deleted'
		}));
		dispatch({
			type: DELETE_AIE,
			payload: id
		});
	})
	.catch(err => console.log(err));
}

// ADD AIE
export const addAIE = AIE => (dispatch, getState) => {
	axios.post(`/api/AIEs/`, AIE, tokenConfig(getState))
	.then(res => {
		dispatch(createMessage({ addAIE: 'Contact Added'
		}));
		dispatch({
			type: ADD_AIE,
			payload: res.data
		});
	})
	.catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};
