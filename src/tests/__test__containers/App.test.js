import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
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

test('contains the TAKE QUIZ button', () => {
  const { getByTestId } = reduxRendering(<App />);
  expect(getByTestId('take-quiz')).toBeInTheDocument();
});

it('mounts Query when take-quiz is clicked', () => {
  const { container, getByTestId } = reduxRendering(<App />);
  fireEvent.click(getByTestId('take-quiz'));
  expect(container.innerHTML).toMatch('Quiz');
});

export default reduxRendering;
