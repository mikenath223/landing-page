import React from 'react';
import { cleanup } from '@testing-library/react';
import reduxRendering from '../__test__containers/App.test';
import '@testing-library/jest-dom/extend-expect';
import Query from '../../components/Query';

afterEach(cleanup);
const mockInput = {
  question: "Which image matches your hairloss",
  options: [{ "Yes": true }, { "No": false }]
}

it('renders Query without crashing', () => {
  reduxRendering(
    <Query />,
  );
});

test('it renders right text on render', () => {
  const { getByText, getByTestId } = reduxRendering(
    <Query
      dataObj={mockInput}
    />);
  expect(getByTestId('question')).toHaveTextContent(
    'Which image matches your hairloss');
  expect(getByText('false')).toBeInTheDocument();
  expect(getByText('true')).toBeInTheDocument();
});
