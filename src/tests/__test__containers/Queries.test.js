import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Queries from '../../containers/Queries';

afterEach(cleanup);
const reduxRendering = component => ({
  ...render(
    <Provider store={store}>
      {component}
    </Provider>,
  ),
});
const mockEmpty = [{}];

it('renders Queries without crashing', () => {
  reduxRendering(<Queries surveyApiData={mockEmpty} />);
});

test('renders text for quiz heading', () => {
  const { getByText } = reduxRendering(
    <Queries surveyApiData={mockEmpty} />,
  );
  expect(getByText('Quiz')).toBeDefined();
});
