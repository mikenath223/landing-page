import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Homepage from '../../containers/Homepage';

afterEach(cleanup);
const reduxRendering = component => ({
  ...render(
    <Provider store={store}>
      {component}
    </Provider>,
  ),
});
test('renders Homepage without crashing', () => {
  reduxRendering(<Homepage />);
});

test('renders its child component Footer', () => {
  const { getByTestId } = reduxRendering(<Homepage />);
  expect(getByTestId('product')).toHaveTextContent('PRODUCT');
});
