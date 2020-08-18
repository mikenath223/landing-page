import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../../components/Footer';

afterEach(cleanup);
const reduxRendering = component => ({
  ...render(
    <Provider store={store}>
      {component}
    </Provider>,
  ),
});
test('renders Footer without crashing', () => {
  reduxRendering(<Footer />);
});

test('renders link texts on footer', () => {
  const { getByTestId } = reduxRendering(<Footer />);
  expect(getByTestId('product')).toHaveTextContent('PRODUCT');
});
