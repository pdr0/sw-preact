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
				<div className={style.imghead}>
					<img src="../../assets/header.jpg" />
				</div>
				<Search/>
				{props.city ? <Forecast city={props.city.cityData}/> : null}
			</div>
		);
	}
}
