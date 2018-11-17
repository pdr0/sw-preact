import { h } from 'preact';
import style from './style';

const Forecast = (props) => (
	<div className={style.forecast}>
		<h3>{props.city.name}</h3>

		<img src={`https://openweathermap.org/img/w/${props.city.weather[0].icon}.png`} />
		<p>{props.city.weather[0].main}</p>
		<p>Forecast: {props.city.weather[0].description}</p>

		<p>Latitud: {props.city.coord.lat}</p>
		<p>Longitud: {props.city.coord.lon}</p>

		<p>Humidity: {props.city.main.humidity}%</p>
		<p>Pressure: {props.city.main.pressure}</p>
		<p>Temperature: {props.city.main.temp}&#8451;</p>
		<p>Temp Max: {props.city.main.temp_max}&#8451;</p>
		<p>Temp Min: {props.city.main.temp_min}&#8451;</p>

		<p>Country: {props.city.sys.country}</p>
		<p>Sunrise: {getTime(props.city.sys.sunrise)}</p>
		<p>Sunset: {getTime(props.city.sys.sunset)}</p>

		<h4>Wind</h4>
		<p>Speed: {props.city.wind.speed}</p>
		<p>Degrees: {props.city.wind.deg}</p>
	</div>
);

const getTime = (timestamp) => {
	const time = new Date(timestamp * 1000);
	let minutes = time.getMinutes();
	if (minutes >= '0' && minutes <= '9') {
		minutes = `0${minutes}`;
	}
	return `${time.getHours()}:${minutes}:${time.getSeconds()}`;
};

export default Forecast;
