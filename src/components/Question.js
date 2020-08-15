import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styles from '../styles/Question.module.css';


const Question = ({ dataObj, queryNum, queryAmount, displayQuestion, handleClick }) => {
  const { options } = dataObj;

  return (
    <div className={(displayQuestion === queryNum) ? "show-elem" : "hide-elem"}>
      <div>
        <h3>{queryNum} of {queryAmount}</h3>
        <h1>{dataObj.question}</h1>
      </div>
      <ul>
        {
          options.map((el, i) => {
            const retrievedObjKeys = Object.keys(el)[0];
            const retrievedObjValues = el[retrievedObjKeys];

            let html = retrievedObjValues !== true ? retrievedObjValues : '';
            const data = dataObj.question;
            
            const answers = {}
            answers[data] = retrievedObjKeys.startsWith('<') ? retrievedObjValues : retrievedObjKeys;
            return (
              <li
                onClick={(event) => handleClick(event, answers)}
                tabIndex={(i + 1) * queryNum}
                key={retrievedObjKeys + i}>
                {ReactHtmlParser(html)}
                {retrievedObjKeys}
              </li>
            )
          })
        }
      </ul>
      {/* {console.log(dataObj)} */}
    </div>
  )
}

export default Question;