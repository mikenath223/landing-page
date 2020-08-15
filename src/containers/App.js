import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Query from './Query';
import { getQuestions } from '../lib/firebase'
import {
  loadData,
  selectApiData,
} from '../lib/slices/fetchDataSlice';


const App = () => {
  const queryApiData = useSelector(selectApiData);
  const dispatch = useDispatch();

  useEffect(() => {
    getQuestions().then(res => dispatch(loadData(res)))
  }, [dispatch])

  return (
    <div className="App">
      <Query
        queryApiData={queryApiData}
      />
      {console.log(queryApiData)}
    </div>
  );
}

export default App;
