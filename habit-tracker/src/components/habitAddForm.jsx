import React, { Component } from 'react';

class HabitAddForm extends Component {
  render() {
    return (
      <div className="add-input">
        <input type="text" name="habit-input" placeholder="Habit?"></input>
        <button className="add-button">Add</button>
      </div>
    );
  }
}

export default HabitAddForm;
