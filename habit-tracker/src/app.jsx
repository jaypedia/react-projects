import './app.css';
import React from 'react';
import Navbar from './components/navbar';
import Habits from './components/habits';
import Resetbtn from './components/resetbtn';

class App extends React.Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  // 인자로 특정한 habit을 전달받는다. 원하는 특정 habit을 함수의 인자로 전달해야 한다.
  handleIncrement = habit => {
    console.log(`handleIncrement ${habit.name}`);
    const _habits = [...this.state.habits];
    const index = _habits.indexOf(habit);
    _habits[index].count++;
    this.setState({ habits: _habits });
  };

  handleDecrement = habit => {
    console.log(`handleDecrement ${habit.name}`);
    const _habits = [...this.state.habits];
    const index = _habits.indexOf(habit);
    const count = _habits[index].count - 1;
    _habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits: _habits });
  };

  handleDelete = habit => {
    const _habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits: _habits });
  };

  // while문을 돌면서 모든 count를 0으로 교체해버리기
  handleReset = () => {
    let i = 0;
    while (i < this.state.habits.length) {
      let _count = this.state.habits[i].count;
      _count = 0; // Do not mutate state directly
      // this.setState({ count: 0 });
      i++;
    }
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        ></Navbar>
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <Resetbtn onReset={this.handleReset}></Resetbtn>
      </>
    );
  }
}

export default App;
