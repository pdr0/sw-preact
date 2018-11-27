import * as ACTIONS from '../action-types';


export const citiesList = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.SET_CITIES_LIST:
			return Object.assign({}, { ...action.payload });
			break;
		default:
			return state;
	}
};