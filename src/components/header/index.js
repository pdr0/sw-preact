import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<Link activeClassName={style.active} href="/forecast" >Forecast</Link>
		<Link activeClassName={style.actions} href="/" ><h1>Forecast App</h1></Link>
	</header>
);

export default Header;
