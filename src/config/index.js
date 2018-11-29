import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
			window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// options like actionSanitizer, stateSanitizer
			}) : null;

	const enhancer = composeEnhancers(
		applyMiddleware(thunk)
	);

	return createStore(
		rootReducer,
		initialState,
		enhancer
	);
}