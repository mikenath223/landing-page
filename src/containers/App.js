import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Query from '../components/Query';
import { getQuestions } from '../lib/firebase'
import {
  loadData,
  selectApiData,
} from '../lib/slices/fetchDataSlice';


const App = () => {
  const queryAppData = useSelector(selectApiData);
  const dispatch = useDispatch();

  useEffect(() => {
    getQuestions()
    // dispatch(loadData())
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      manual
      </header>
        <Query />
    </div>
  );
}

export default App;
