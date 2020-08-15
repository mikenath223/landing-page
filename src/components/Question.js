import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styles from '../styles/Question.module.css';


const Question = ({ dataObj, queryNum, queryLength, showElem, handleClick }) => {
  const { options } = dataObj;

  return (
    <div>
      <div>
        <h3>{queryNum} of {queryLength}</h3>
        <h1>{dataObj.question}</h1>
      </div>
      <ul>
        {
          options.map((el, i) => {
            const retrievedKeys = Object.keys(el)[0];
            let html = el[retrievedKeys] !== true ? el[retrievedKeys] : '';

            return (<li onClick={handleClick} tabIndex={(i + 1) * queryNum}
              key={retrievedKeys + i}
              className={showElem ? "show-elem" : "hide-elem"}>
              {ReactHtmlParser(html)}
              {retrievedKeys}
            </li>)
          })
        }
      </ul>
      {console.log(dataObj)}
    </div>
  )
}

export default Question;