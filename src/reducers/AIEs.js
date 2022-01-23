import { GET_AIES, DELETE_AIE, ADD_AIE } from '../actions/constants.js';

const initialState = {
	AIEs: []
}

export default function(state = initialState, action){
	switch(action.type) {
		case GET_AIES:
			return {
				...state,
				AIEs: action.payload
			};
		case DELETE_AIE:
			return {
				...state,
				AIEs: state.AIEs.filter(AIE => AIE.id !== action.payload)
			}
		case GET_AIES:
			return {
				...state,
				AIEs: [...state.AIEs, action.payload]
			};
		default:
			return state;
	}
}
