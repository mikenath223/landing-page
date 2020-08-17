import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/query.module.css';

const Query = ({
  dataObj = { options: [], quetion: '', type: '' }, queryNum, queryAmount, displayQuestion, handleClick,
}) => {
  const { options, question } = dataObj;


  return (
    <div className={(displayQuestion === queryNum) ? 'show-elem' : 'hide-elem'}>
      <div className={styles.questionInfo}>
        <h3 aria-label="Quantity of items shown and how many more to be shown">
          Step
          {' '}
          {queryNum}
          {' '}
          of
          {' '}
          {queryAmount}
        </h3>
        <h2 data-testid="question">{question}</h2>
      </div>
      <div className={styles.questionOptions}>
        {
          options && options.map((el, i) => {
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

                <span className={styles.questionButton}>
                  {(html !== true && html !== 'false')
                    ? retrievedObjKey : ReactHtmlParser(html)}
                </span>
              </button>
            );
          })
        }
      </div>
    </div>
  );
};

export default Query;

Query.defaultProps = {
  dataObj: {},
  queryNum: 0,
  queryAmount: 0,
  displayQuestion: 0,
  handleClick: () => { },
};

Query.propTypes = {
  dataObj: PropTypes.shape({
    question: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.any),
    type: PropTypes.string,
  }),
  queryNum: PropTypes.number,
  queryAmount: PropTypes.number,
  displayQuestion: PropTypes.number,
  handleClick: PropTypes.func,
};
