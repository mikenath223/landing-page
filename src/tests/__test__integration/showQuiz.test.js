// import React from 'react';
// import { cleanup, fireEvent, waitFor } from '@testing-library/react';
// import reduxRendering from '../__test__containers/App.test';
// import mockQuiz from '../mock/fetch'
// import App from '../__test__containers/App.test'
// import axios from 'axios';

// jest.mock('axios');
// afterEach(cleanup);

// test('makes an api request to load take quiz json', () => {
//   // fetch.mockResolvedValue(JSON.stringify(mockQuiz));
//   axios.get.mockResolvedValue(mockQuiz);
//   // fetch('questionnaire.json').then(res => res.json()).then(res => {
//   //   expect(typeof res.questions).toEqual('object');
//   // })
//   axios.get('questionnaire.json').then(res => {
//     console.log(res)
//   })
//   // expect(fetch.mock.calls.length).toEqual(1);
//   // expect(fetch.mock.calls[0][0]).toEqual('questionnaire.json');
//   // const { container, getByTestId } = act(() => {
//   //   reduxRendering(<App />);
//   // });

//   // fireEvent.click(getByTestId('take-quiz'));
//   // expect(container.innerHTML).toMatch('Quiz');
// });
