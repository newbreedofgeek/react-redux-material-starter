import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from 'store';
import routes from 'routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../common/css/main.scss';

/* Images
 * This space is reserved for images that are required by server rendering,
 * e.g. the favicon and any other images that need to be in the base HTML file.
 */
import '../common/images/favicon.png';

// The root element of your app
const rootElement = document.getElementById('app');

// Creates the Redux store based on the initial state passed down by the server
// rendering.
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

// Render the app!
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  rootElement
);
