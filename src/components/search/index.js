import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { fetchCityById } from '../../actions/';
import styles from './style.css';
import cities from '../../cities.json';

class Search extends Component {

	constructor(props) {
		super();
		this.state = {
			found: []
		};
	}

	handleOnclickCity = (cityId) => {
		this.setState({ found: [], cityId });
		this.inputSearch.value = null;
		this.props.fetchCityById(this.state.cityId);
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

	componentWillReceiveProps(nextProps) {
		console.log('nextProps', nextProps);
	};


	render({}, { found }) {
		return (
			<div className={styles.search}>
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

const mapStateToProps = (state) => ({
	city: state.city
});


const mapDispatchToProps = (dispatch) => ({ fetchCityById: (cityId) => dispatch(fetchCityById(cityId)) });

export default connect(mapStateToProps, mapDispatchToProps)(Search);