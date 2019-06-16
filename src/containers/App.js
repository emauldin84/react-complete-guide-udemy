import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    persons: [
      {id: 'aksldjfakl;s', name: 'Eric', age: 34},
      {id: '23ofmweef', name: 'Caitie', age: 29},
      {id: '23iomoi2j3', name: 'Koa', age: 6}
    ],

  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    console.log('personIndex',personIndex)

    const person = {
      ...this.state.persons[personIndex]
    }
    console.log('person',person)

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }


  render () {
    let persons = null
    if (this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
      )
      
      // btnClass = classes.Red
      
    }
    
    return (

      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>


    );
  }
}

export default App;
