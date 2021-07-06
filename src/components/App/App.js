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

  addStudent = (newStudent) => {
    this.setState({
      staff: this.state.staff,
      students: [...this.state.students, newStudent]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Turing Yearbook</h1>
        </header>
        <h1>Staff</h1>
        <Cohort people={this.state.staff} type="staff"/>
        <h1>Students</h1>
        <Cohort people={this.state.students} type="students"/>
      </div>
    );
  }
}

export default App;
