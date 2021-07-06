import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import people from '../../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
      <h1>Staff</h1>
      <Cohort people={this.state.staff} />
      <h1>Students</h1>
      <Cohort people={this.state.students} />
      </div>
    );
  }
}

export default App;
