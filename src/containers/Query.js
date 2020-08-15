import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import Question from '../components/Question';
import styles from '../styles/Query.module.css';

const Queries = ({ queryApiData }) => {
  const queryLength = queryApiData.length;

  return (
    <ul>
      {
        queryApiData.map((dataObj, i) => {
          return (<li key={new Date().getTime() + i}>
            <Question
              dataObj={dataObj}
              queryNum={i + 1}
              queryLength={queryLength}
            />
          </li>
          )
        })
      }
    </ul>
  );
}

export default Queries;