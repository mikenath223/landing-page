import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/Question.module.css';

const Question = ({
  dataObj, queryNum, queryAmount, displayQuestion, handleClick,
}) => {
  const { options, question } = dataObj;

  return (
    <div className={(displayQuestion === queryNum) ? 'show-elem' : 'hide-elem'}>
      <div className={styles.questionInfo}>
        <h3 aria-labelledby="Quantity of items shown and how many more to be shown">
          {queryNum}
          {' '}
          of
          {' '}
          {queryAmount}
        </h3>
        <h1>{question}</h1>
      </div>
      <ul className={styles.questionOptions}>
        {
          options.map((el, i) => {
            const retrievedObjKeys = Object.keys(el)[0];
            const retrievedObjValues = el[retrievedObjKeys];
            const html = retrievedObjValues !== true ? retrievedObjValues : '';

            return (
              <button
                key={uuidv4()}
                type="submit"
                className={styles.eachOption}
                onClick={handleClick}
                tabIndex={(i + 1) * queryNum}
              >
                {ReactHtmlParser(html)}
                <li className={styles.questionButton}>{retrievedObjKeys}</li>
              </button>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Question;

Question.propTypes = {
  dataObj: PropTypes.shape({
    question: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.any),
  }).isRequired,
  queryNum: PropTypes.number.isRequired,
  queryAmount: PropTypes.number.isRequired,
  displayQuestion: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
