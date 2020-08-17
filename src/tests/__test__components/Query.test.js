import React from 'react';
import { cleanup } from '@testing-library/react';
import reduxRendering from '../__test__containers/App.test';
import '@testing-library/jest-dom/extend-expect';
import Query from '../../components/Query';

const { question, options } = {

};

afterEach(cleanup);
it('renders Query without crashing', () => {
  reduxRendering(<Query />);
});

test('contains text for separate result cases', () => {
  const { getByTestId } = reduxRendering(<Query />);
  expect(getByTestId('treated')).toHaveTextContent('Great news! We have the perfect treatment');
  expect(getByTestId('not-treated')).toHaveTextContent('Unfortunately, we are unable to prescribe this medication for you');
});
