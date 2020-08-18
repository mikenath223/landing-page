import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'whatwg-fetch';
import Homepage from './Homepage';
import Query from './Queries';
import {
  loadData,
  selectApiData,
} from '../store/slices/queryApiSlice';

const App = () => {
  const [loadSurvey, setLoadSurvey] = useState(false);
  const [error, setError] = useState(false);

  const surveyApiData = useSelector(selectApiData);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('quiz.json', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(req => req.json()).then(res => dispatch(
      loadData(res.questions),
    )).catch(() => setError(true));
  }, [dispatch]);

  const handleClick = () => setLoadSurvey(true);

  if (loadSurvey && error) {
    return (
      <h3 className="error">
        We are sorry but there has been an issue fetching your treatment questionnaire.
        Please contact support.
      </h3>
    );
  } if (loadSurvey && !error) {
    return (
      <Query
        surveyApiData={surveyApiData}
      />
    );
  }

  return (
    <div className="App">
      <Homepage
        handleClick={handleClick}
      />
    </div>
  );
};

export default App;
