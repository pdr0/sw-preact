import { h, Component } from 'preact';
import cities from '../../cities.json';
import style from './style';
import { connect } from 'preact-redux';

@connect((state) => ({ city: state.city }))
export default class Forecast extends Component {

	render({}, { }) {
		return (
			<div className={style.forecast}>
				{console.log(this)}
				{console.log(this.props.city)}
			</div>
		);
	}

}

