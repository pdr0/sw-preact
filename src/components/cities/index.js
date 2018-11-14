import { h, Component } from 'preact';
import cities from '../../cities.json';
import style from './style';

export default class Cities extends Component {
	constructor(props) {
		super();
		this.state = { cities: cities };
	}

	render({}, { cities }) {
		return (
			<div className={style.cities}>
				{cities.map((c) => {
					console.log('city:', c.name)
				})}


			</div>
		);

	}
}

