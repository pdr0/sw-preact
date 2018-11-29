import * as ACTION_TYPES from '../action-types';
import config from '../config';

export const fetchCityById = (cityId) => {
	return (dispatch) => {
		const url = `${config.weatherApi.endpoint}weather/?id=${cityId}&units=metric&APPID=${config.weatherApi.apiKey}`;
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

export const fetchCitiesData = () => {
	return (dispatch) => {
		const url = 'https://localhost:8080/raw/cities.json';
		fetch(url)
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				dispatch({
					type: ACTION_TYPES.SET_CITIES_LIST,
					payload: { citiesListRaw: myJson }
				});
			});
	};
};
