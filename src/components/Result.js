import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ isSurveyFinished, giveTreatment }) => {
  let displayResult;
  if (isSurveyFinished && giveTreatment) {
    displayResult = true;
  } else if (isSurveyFinished && !giveTreatment) {
    displayResult = false;
  }

  return (
    <>
      <h2 className={displayResult === true ? 'show-elem result-text' : 'hide-elem'}>
        Unfortunately, we are unable to prescribe this medication for you. This is because
        finasteride can alter the PSA levels, which maybe used to monitor for cancer. You
        should discuss this further with your GP or specialist if you would still like this
        medication.
      </h2>
      <h2 className={displayResult !== false ? 'hide-elem' : 'show-elem result-text'}>
        Great news! We have the perfect treatment for your hair loss. Proceed
        to
        {' '}
        <a href="www.manual.co" rel="noopener noreferrer">www.manual.co</a>
        ,
        and prepare to say hello to your new hair!
      </h2>
    </>
  );
};

export default Result;

Result.propTypes = {
  isSurveyFinished: PropTypes.bool.isRequired,
  giveTreatment: PropTypes.bool.isRequired,
};
