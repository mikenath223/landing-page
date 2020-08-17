import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import reduxRendering from './App.test';

afterEach(cleanup);

test('on page load a user can take quiz', () => {
  window.fetch.mockResolvedValueOnce({
    json: () => Promise.resolve(fakeResponse),
  });
  const { container, getByTestId } = reduxRendering(<App />);

  fireEvent.click(getByTestId('take-quiz'));
  expect(container.innerHTML).toMatch('Quiz');
});
