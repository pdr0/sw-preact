import { h } from 'preact';
import style from './style';
import Search from '../../components/search';
import Forecast from '../../components/forecast';


const Home = () => (
	<div class={style.home}>
		<Search />
		<Forecast />
	</div>
);

export default Home;
