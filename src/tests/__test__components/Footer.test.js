import React from 'react';
import { cleanup } from '@testing-library/react';
import reduxRendering from '../__test__containers/App.test';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../../components/Footer';


afterEach(cleanup);
test('renders Footer without crashing', () => {
  reduxRendering(<Footer />);
})

test('renders link texts on footer', () => {
  const { getByTestId } = reduxRendering(<Footer />);
  expect(getByTestId('product')).toHaveTextContent('PRODUCT');
})
