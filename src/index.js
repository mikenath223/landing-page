import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import ErrorBoundary from './containers/ErrorBoundary';
import './styles/index.css';
import './styles/reset.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const rendered = () => ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// To configure react-axe package for a11y testing on dev mode.
if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then(axe => {
    axe.default(React, ReactDOM, 1000);
    rendered()
  });
} else {
  rendered()
}

serviceWorker.unregister();
