import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import ErrorBoundary from '../../containers/ErrorBoundary';

afterEach(cleanup);
const reduxRendering = component => ({
  ...render(
    <Provider store={store}>
      {component}
    </Provider>,
  ),
});

const Child = () => {
  throw new Error();
};

test('it renders ErrorBoundary component when there is an error', () => {
  /* eslint-disable no-console */
  console.error = jest.fn();
  const { getByText } = reduxRendering(
    <ErrorBoundary>
      <Child />
    </ErrorBoundary>,
  );
  expect(getByText(/issue processing your last request/i)).toBeDefined();
  expect(console.error).toHaveBeenCalled();
  /* eslint-enable no-console */
});
