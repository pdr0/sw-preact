import { h, Component } from 'preact';
import styles from './style.css';

export default class Search extends Component {

	constructor(props) {
		super();
		this.state = {
			query: ''
		};
	}

	handleInputChange = (e) => {
		if (e.target.value.length > 2) {
			this.setState({
				query: e.target.value
			});
		}
		else {
			this.setState({
				query: ''
			});
		}

	};

	render({}, { query }) {
		return (
			<div>
				<input
					placeholder='Jot a city...'
					onKeyUp={(e) => this.handleInputChange(e)}
				/>
				<p>{query}</p>
			</div>
		);
	}
}