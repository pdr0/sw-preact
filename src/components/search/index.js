import { h, Component } from 'preact';
import styles from './style.css';
import cities from '../../cities.json';
import config from '../../config.json';

export default class Search extends Component {

	constructor(props) {
		super();
		this.state = {
			found: []
		};
	}

	handleOnclickCity = (cityId) => {
		this.setState({ found: [], cityId });
		this.inputSearch.value = null;
	};

	handleInputChange = (e) => {
		if (e.target.value.length > 2) {
			let search = e.target.value;
			const result = cities.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
			this.setState({
				found: result
			});
		}
		else {
			this.setState({
				found: []
			});
		}
	};

	componentDidUpdate = () => {
		this.state.cityId ? this.fetchWeatherId(this.state.cityId) : null;
	};

	fetchWeatherId(cityId) {
		const url = `${config.weatherApi.endpoint}weather/?id=${cityId}&APPID=${config.weatherApi.apiKey}`;
		fetch(url)
			.then(function(response) {
				return response.json();
			})
			.then(function(myJson) {
				console.log(JSON.stringify(myJson));
			});
	};

	render({}, { found }) {
		return (
			<div>
				<input
					placeholder='Jot a city...'
					onKeyUp={(e) => this.handleInputChange(e)}
					ref={el => this.inputSearch = el}
				/>
				{found.map((city) => <p onClick={() => this.handleOnclickCity(city.id)}>{city.name}</p>)}
			</div>
		);
	}
}