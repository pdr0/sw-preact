import * as ACTIONS from '../action-types';


export const city = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.ADD_CITY:
			return Object.assign({}, { ...action.payload });
			break;

		default:
			return state;
	}
};