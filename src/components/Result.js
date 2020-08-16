import React from 'react';

const Result = ({ isSurveyFinished, giveTreatment }) => (
  <>
    <h3 className={!(isSurveyFinished) ? 'hide-elem' : giveTreatment ? 'show-elem result-text' : 'hide-elem'}>
      Unfortunately, we are unable to prescribe this medication for you. This is because
      finasteride can alter the PSA levels, which maybe used to monitor for cancer. You
      should discuss this further with your GP or specialist if you would still like this
      medication.
    </h3>
    <h3 className={!(isSurveyFinished) ? 'hide-elem' : giveTreatment ? 'hide-elem' : 'show-elem result-text'}>
      Great news! We have the perfect treatment for your hair loss. Proceed
      to
      {' '}
      <a href="www.manual.co" rel="noopener noreferrer">www.manual.co</a>
      ,
      and prepare to say hello to your new hair!
    </h3>
  </>
);

export default Result;
