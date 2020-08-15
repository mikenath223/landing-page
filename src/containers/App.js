import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './Homepage';
import Query from './Queries';
import { getQuestions } from '../lib/firebase'
import {
  loadData,
  selectApiData,
} from '../lib/slices/fetchDataSlice';


const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false)

  const surveyApiData = useSelector(selectApiData);
  const dispatch = useDispatch();

  useEffect(() => {
    getQuestions().then(res => dispatch(loadData(res))).catch(() => setError(true))
  }, [dispatch])


  if (error) {
    return (
      <h2>We are sorry but there has been an issue fetching your survey. Please contact support.</h2>
    )
  }

  if (isLoaded) {
    <Homepage />
  }

  return (
    <div className="App">
      <Query
        surveyApiData={surveyApiData}
      />
      {console.log(queryApiData)}
    </div>
  );
}

export default App;
