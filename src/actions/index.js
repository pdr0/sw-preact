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
		const url = 'https://raw.githubusercontent.com/pdr0/sw-preact/master/src/cities.json?token=ABtIcjlXLTT9UXqapE6MfEIqZl3j3Ppxks5cBVfHwA%3D%3D';
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
