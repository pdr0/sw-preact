import { h } from 'preact';
import style from './style';
import Search from './../../components/search';


const Home = () => (
	<div class={style.home}>
		<Search />
	</div>
);

export default Home;
