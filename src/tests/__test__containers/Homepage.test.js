import React from 'react';
import { cleanup } from '@testing-library/react';
import reduxRendering from './App.test';
import '@testing-library/jest-dom/extend-expect';
import Homepage from '../../containers/Homepage';

afterEach(cleanup);
test('renders Homepage without crashing', () => {
  reduxRendering(<Homepage />);
});

test('renders its child component Footer', () => {
  const { getByTestId } = reduxRendering(<Homepage />);
  expect(getByTestId('product')).toHaveTextContent('PRODUCT');
});
