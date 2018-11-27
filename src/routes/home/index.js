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
				<p>
					Rich offline experiences, periodic background syncs, push notifications—functionality that would normally require a native application—are coming to the web. Service workers provide the technical foundation that all these features rely on.<br />

					<h3>What is a service worker</h3>
					A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction.
					Today, they already include features like push notifications and background sync. In the future, service workers might support other things like periodic sync or geofencing. The core feature discussed in this tutorial is the ability to intercept and handle network requests, including programmatically managing a cache of responses.<br />

					The reason this is such an exciting API is that it allows you to support offline experiences, giving developers complete control over the experience.<br />

					Before service worker, there was one other API that gave users an offline experience on the web called AppCache. There are a number of issues with the AppCache API that service workers were designed to avoid.<br />

					Things to note about a service worker:<br />

					It's a JavaScript Worker, so it can't access the DOM directly. Instead, a service worker can communicate with the pages it controls by responding to messages sent via the postMessage interface, and those pages can manipulate the DOM if needed.<br />
					Service worker is a programmable network proxy, allowing you to control how network requests from your page are handled.<br />
					It's terminated when not in use, and restarted when it's next needed, so you cannot rely on global state within a service worker's onfetch and onmessage handlers. If there is information that you need to persist and reuse across restarts, service workers do have access to the IndexedDB API.<br />
					Service workers make extensive use of promises, so if you're new to promises, then you should stop reading this and check out Promises, an introduction.<br />

				</p>
				<h2>Why Cache?</h2>
				<p></p>
				<h2>Examples of SW</h2>
				<p>blah</p>
				<a ></a>
			</div>
		);
	}
}
