import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styles from '../styles/Question.module.css';

const Question = ({
  dataObj, queryNum, queryAmount, displayQuestion, handleClick,
}) => {
  const { options } = dataObj;

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
        <h1>{dataObj.question}</h1>
      </div>
      <ul className={styles.questionOptions}>
        {
          options.map((el, i) => {
            const retrievedObjKeys = Object.keys(el)[0];
            const retrievedObjValues = el[retrievedObjKeys];

            const html = retrievedObjValues !== true ? retrievedObjValues : '';

            return (
              <li
                className={styles.eachOption}
                onClick={handleClick}
                tabIndex={(i + 1) * queryNum}
                key={retrievedObjKeys + i}
              >
                {ReactHtmlParser(html)}
                <button type="submit" className={styles.questionButton}>{retrievedObjKeys}</button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Question;
