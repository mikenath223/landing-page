import React from 'react';
// import styles from '../styles/Question.module.css';
import ReactHtmlParser from 'react-html-parser';

const Question = ({ dataObj, queryNum, queryLength }) => {
  const { options } = dataObj;


  return (
    <>
      <div>
        <h3>{queryNum} of {queryLength}</h3>
        <h1>{dataObj.question}</h1>
      </div>
      <ul>
        {
          options.map((el, i) => {
            const retrievedKeys = Object.keys(el)[0];
            if (true === el[retrievedKeys] || false === el[retrievedKeys]) {
              return <li key={retrievedKeys + i}>{retrievedKeys}</li>
            }
            if (el[retrievedKeys].startsWith('<') || retrievedKeys.startsWith('<')) {
              let html = JSON.parse(JSON.stringify(el[retrievedKeys]))
              return (<li key={retrievedKeys + i}>
                {ReactHtmlParser(html)}
                {retrievedKeys}
              </li>)
            }
            return <li key={retrievedKeys + i}>{retrievedKeys}</li>
          })
        }
      </ul>
      {console.log(dataObj)}
    </>
  )
}

export default Question;