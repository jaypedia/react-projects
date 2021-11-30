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

  let [clickedTitle, changeClickedTitle] = useState(0);

  let [inputValue, changeInputValue] = useState('');

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

      {title.map((t, i) => (
        <div className="list" key={i}>
          <h3
            onClick={() => {
              changeClickedTitle(i);
              changeModal(!modal);
            }}
          >
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
      {modal ? <Modal title={title} clickedTitle={clickedTitle}></Modal> : null}
      <div className="publish">
        <input
          onChange={e => {
            changeInputValue(e.target.value);
          }}
        />
        <button
          onClick={e => {
            let newArr = [...title];
            newArr.unshift(inputValue);
            changeTitle(newArr);
            e.target.previousElementSibling.value = '';
          }}
        >
          Publish
        </button>
      </div>
      <Profile></Profile>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[props.clickedTitle]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Millie' };
  }

  changeName() {
    this.setState({ name: 'Jay' });
  }

  render() {
    return (
      <>
        <span>I'm {this.state.name}</span>
        <button onClick={this.changeName.bind(this)}>Change Name</button>
      </>
    );
  }
}
