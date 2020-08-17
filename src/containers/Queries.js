import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  updateTreatment,
  selectTreatment,
} from '../store/slices/giveTreatmentSlice';
import Query from '../components/Query';
import Result from '../components/Result';

const Queries = ({ surveyApiData }) => {
  const [displayQuestion, setDisplayQuestion] = useState(1);

  const treatment = useSelector(selectTreatment);
  const setGiveTreatment = useDispatch();

  const queryAmount = surveyApiData.length;
  const handleClick = event => {
    setDisplayQuestion(state => state + 1);
    if (event.target.textContent === 'true') {
      setGiveTreatment(updateTreatment({
        value: 'dont-treat',
      }));
    }
    const surveyFinished = displayQuestion === queryAmount;
    if (surveyFinished) {
      setGiveTreatment(updateTreatment({
        check: true,
      }));
    }
  };

  return (
    <div className="queryWrap">
      <h1>Quiz</h1>
      {
        surveyApiData.map((dataObj, i) => (
          <Query
            key={uuidv4()}
            dataObj={dataObj}
            queryNum={i + 1}
            queryAmount={queryAmount}
            displayQuestion={displayQuestion}
            handleClick={handleClick}
          />
        ))
      }
      <Result
        treatment={treatment}
      />
    </div>
  );
};

Queries.propTypes = {
  surveyApiData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Queries;
