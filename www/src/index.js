import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import configureStore from './store/configureStore'
import Root from './Root';
import * as serviceWorker from './serviceWorker';
const store = configureStore(window.__data)

setTimeout(() => {
  // TODO stop css from flashing Need to fix this hack
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
}, 100)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
