import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Result from '../../components/Result';

afterEach(cleanup);
const reduxRendering = component => ({
  ...render(
    <Provider store={store}>
      {component}
    </Provider>,
  ),
});
const treatment = {
  value: 'treat',
  check: false,
};

test('renders Result without crashing', () => {
  reduxRendering(
    <Result
      treatment={treatment}
    />,
  );
});

test('doesnt return text when value of check is false', () => {
  const { container } = reduxRendering(
    <Result
      treatment={treatment}
    />,
  );
  expect(container).not.toHaveTextContent('Great news! We have the perfect treatment');
  expect(container).not.toHaveTextContent('Unfortunately, we are unable to prescribe');
});

test('returns text when value of check is true', () => {
  const newTreatment = { ...treatment, check: true };
  const { container } = reduxRendering(
    <Result
      treatment={newTreatment}
    />,
  );
  expect(container).toHaveTextContent('Great news! We have the perfect treatment');
  expect(container).toHaveTextContent('Unfortunately, we are unable to prescribe');
});

test('when patient needs treatment shows the right result', () => {
  const newTreatment = { ...treatment, check: true };
  const { getByTestId } = reduxRendering(
    <Result
      treatment={newTreatment}
    />,
  );
  expect(getByTestId('treated')).toHaveClass('show-elem');
  expect(getByTestId('not-treated')).not.toHaveClass('show-elem');
});

test('when patient doesnt need treatment shows different result', () => {
  const newTreatment = { value: 'dont-treat', check: true };
  const { getByTestId } = reduxRendering(
    <Result
      treatment={newTreatment}
    />,
  );
  expect(getByTestId('treated')).not.toHaveClass('show-elem');
  expect(getByTestId('not-treated')).toHaveClass('show-elem');
});
