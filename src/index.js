import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './lib/store';
import ErrorBoundary from './containers/ErrorBoundary';
import App from './containers/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
