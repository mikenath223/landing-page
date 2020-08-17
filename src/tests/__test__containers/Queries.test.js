import React from 'react';
import { cleanup } from '@testing-library/react';
import reduxRendering from './App.test';
import '@testing-library/jest-dom/extend-expect';
import Queries from '../../containers/Queries';

afterEach(cleanup);
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
