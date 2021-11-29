/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

function App() {
  let posts = 'Today I Learned';

  const [title, changeTitle] = useState([
    'Study React',
    'JavaScript Class',
    'CSS Animation',
  ]);

  let [count, changeCount] = useState(0);

  function changeMyTitle() {
    let newArr = [...title];
    newArr.sort();
    changeTitle(newArr);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>Dev Blog</div>
      </div>

      <button onClick={changeMyTitle}>Change!</button>
      <div className="list">
        <h3>
          {title[0]}
          <span
            onClick={() => {
              changeCount(++count);
            }}
          >
            👍
          </span>
          {count}
        </h3>
        <p>2월 17일 발행</p>

        <hr />
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
