import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/Query.module.css';

const Query = ({
  dataObj, queryNum, queryAmount, displayQuestion, handleClick,
}) => {
  const { options, question, type } = dataObj;

  if (type !== 'ChoiceType') return null;

  return (
    <div className={(displayQuestion === queryNum) ? 'show-elem' : 'hide-elem'}>
      <div className={styles.questionInfo}>
        <h3 aria-label="Quantity of items shown and how many more to be shown">
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
            const retrievedObjKey = Object.keys(el)[0];
            const retrievedObjValue = el[retrievedObjKey];
            const html = retrievedObjValue === false ? 'false'
              : retrievedObjValue;

            return (
              <button
                key={uuidv4()}
                type="submit"
                className={styles.eachOption}
                onClick={handleClick}
                tabIndex={(i + 1) * queryNum}
              >
                {(html !== true && html !== 'false')
                  ? ReactHtmlParser(html) : ''}
                <li className={styles.questionButton}>
                  {(html !== true && html !== 'false')
                    ? retrievedObjKey : ReactHtmlParser(html)}
                </li>
              </button>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Query;

Query.propTypes = {
  dataObj: PropTypes.shape({
    question: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.any),
    type: PropTypes.string,
  }).isRequired,
  queryNum: PropTypes.number.isRequired,
  queryAmount: PropTypes.number.isRequired,
  displayQuestion: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
