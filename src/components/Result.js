import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ treatment }) => {
  if (!treatment.check) return null;

  return (
    <>
      <h2 className={treatment.value === "dont-treat" ? 'show-elem result-text' : 'hide-elem'} data-testid="not-treated">
        Unfortunately, we are unable to prescribe this medication for you. This is because
        finasteride can alter the PSA levels, which maybe used to monitor for cancer. You
        should discuss this further with your GP or specialist if you would still like this
        medication.
      </h2>
      <h2 className={treatment.value === "treat" ? 'show-elem result-text' : 'hide-elem'} data-testid="treated">
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
  treatment: PropTypes.shape({
    value: PropTypes.string.isRequired,
    check: PropTypes.bool.isRequired
  }).isRequired
};
