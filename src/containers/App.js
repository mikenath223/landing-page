import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Homepage from './Homepage';
import Query from './Queries';
import getQuestions from '../lib/firebase';
import {
  loadData,
  selectApiData,
} from '../lib/slices/fetchDataSlice';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const surveyApiData = useSelector(selectApiData);
  const dispatch = useDispatch();

  useEffect(() => {
    getQuestions().then(res => {
      dispatch(loadData(res));
      setIsLoaded(true);
    }).catch(() => setError(true));
  }, [dispatch]);

  if (error) {
    return (
      <h2>
        We are sorry but there has been an issue fetching your survey.
        Please contact support.
      </h2>
    );
  }

  // if (!isLoaded) {
    return (
      <div className="App">
        <Homepage />;
    </div>
    )
  // }

  return (
    <div className="App">
      <Query
        surveyApiData={surveyApiData}
      />
    </div>
  );
};

export default App;
