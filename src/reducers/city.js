import * as ACTIONS from '../action-types';


export const city = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.ADD_CITY:
			return { ...action.payload };
		default:
			return state;
	}
};

export default { city };
