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

  let [count, changeCount] = useState([0, 0, 0]);

  let [modal, changeModal] = useState(false);

  function changeMyTitle() {
    let newArr = [...title];
    newArr.sort();
    changeTitle(newArr);
  }

  function modalControl() {
    modal ? changeModal(false) : changeModal(true);
  }

  function increase(i) {
    let newArr = [...count];
    ++newArr[i];
    changeCount(newArr);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>Dev Blog</div>
      </div>
      <button onClick={changeMyTitle}>Sort</button>
      <button
        onClick={() => {
          changeModal(!modal);
        }}
      >
        Modal
      </button>
      {modal ? <Modal></Modal> : null}
      {title.map((t, i) => (
        <div className="list">
          <h3>
            {' '}
            {t}{' '}
            <span
              onClick={() => {
                increase(i);
              }}
            >
              👍
            </span>
            {count[i]}
          </h3>
          <p>2월 17일 발행</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
