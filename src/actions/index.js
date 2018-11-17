import * as ACTION_TYPES from '../action-types';
import config from '../config';

export const fetchCityById = (cityId) => {
	return (dispatch) => {
		const url = `${config.weatherApi.endpoint}weather/?id=${cityId}&APPID=${config.weatherApi.apiKey}`;
		fetch(url)
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				dispatch({
					type: ACTION_TYPES.ADD_CITY,
					payload: { cityData: myJson, cityId }
				});
			});
	};
};
