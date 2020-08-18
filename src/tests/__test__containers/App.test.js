import React from 'react';
import {
  render, cleanup, fireEvent, screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import App from '../../containers/App';

afterEach(cleanup);
const reduxRendering = component => ({
  ...render(
    <Provider store={store}>
      {component}
    </Provider>,
  ),
});

test('renders App component with redux without crashing', () => {
  reduxRendering(<App />);
});

test('landing page contains the TAKE QUIZ button', () => {
  const { getByTestId } = reduxRendering(<App />);
  expect(getByTestId('take-quiz')).toBeInTheDocument();
});

it('mounts Query when take-quiz is clicked', () => {
  const { getByTestId } = reduxRendering(<App />);
  fireEvent.click(getByTestId('take-quiz'));
  expect(screen.getByText('Quiz')).toBeInTheDocument();
});
