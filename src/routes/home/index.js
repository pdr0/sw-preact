import { h, Component } from 'preact';
import style from './style';
import Search from '../../components/search';
import Forecast from '../../components/forecast';
import { connect } from 'preact-redux';

@connect((state) => ({ city: state.city }))
export default class Home extends Component {

	render(props) {

		return (
			<div className={style.home}>
				<h2>Introduction</h2>
				<p>blah</p>
				<h2>Why Cache?</h2>
				<p></p>
				<h2>Examples of SW</h2>
				<p>blah</p>
				<a ></a>
			</div>
		);
	}
}
