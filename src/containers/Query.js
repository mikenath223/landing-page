import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Question from '../components/Question';
import Result from '../components/Result';
import styles from '../styles/Query.module.css';

const Queries = ({ queryApiData }) => {
  const [showElem, setShowElem] = useState('show-elem');
  const [surverAnswers, setSurverAnswers] = useState({});


  const queryLength = queryApiData.length;
  return (
      <ul className={styles.queryWrap}>
        {
          queryApiData.map((dataObj, i) => {
            return (<li key={uuidv4()}>
              <Question
                dataObj={dataObj}
                queryNum={i + 1}
                queryLength={queryLength}
                showElem={showElem}
              />
            </li>
            )
          })
        }
        <Result/>
      </ul>
  );
}

export default Queries;