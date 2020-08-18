import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Query from '../../components/Query';

afterEach(cleanup);
const reduxRendering = component => ({
  ...render(
    <Provider store={store}>
      {component}
    </Provider>,
  ),
});
const mockInput = {
  question: 'Which image matches your hairloss',
  options: [{ Yes: true }, { No: false }],
};

it('renders Query without crashing', () => {
  reduxRendering(
    <Query />,
  );
});

test('it renders right text on render', () => {
  const { getByText, getByTestId } = reduxRendering(
    <Query
      dataObj={mockInput}
    />,
  );
  expect(getByTestId('question')).toHaveTextContent(
    'Which image matches your hairloss',
  );
  expect(getByText('false')).toBeInTheDocument();
  expect(getByText('true')).toBeInTheDocument();
});
