import React from 'react';
import { cleanup } from '@testing-library/react';
import reduxRendering from './App.test';
import '@testing-library/jest-dom/extend-expect';
import ErrorBoundary from '../../containers/ErrorBoundary';

afterEach(cleanup);
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
