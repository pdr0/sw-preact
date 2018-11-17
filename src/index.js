import { Provider } from 'preact-redux';
import configureStore from './config/';
import App from './components/app';
import './style';

const store = configureStore({ city: null });

export default () => (
	<div id="outer">
		<Provider store={store}>
			<App/>
		</Provider>
	</div>
);

