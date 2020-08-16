import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Question from '../components/Question';
import Result from '../components/Result';

const Queries = ({ surveyApiData }) => {
  const [displayQuestion, setDisplayQuestion] = useState(1);
  const [giveTreatment, setGiveTreatment] = useState(false);
  const [isSurveyFinished, setIsSurveyFinished] = useState(false);

  const queryAmount = surveyApiData.length;

  const handleClick = event => {
    setDisplayQuestion(state => state + 1);

    if (event.target.textContent === 'Yes') {
      setGiveTreatment(true);
    }

    const surveyFinished = `${displayQuestion}` === `${queryAmount}`;
    if (surveyFinished) {
      setIsSurveyFinished(true);
    }
  };

  return (
    <div className="queryWrap">
      {
        surveyApiData.map((dataObj, i) => (
            <Question
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
        isSurveyFinished={isSurveyFinished}
        giveTreatment={giveTreatment}
      />
    </div>
  );
};

Queries.propTypes = {
  surveyApiData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Queries;
