import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    persons: [
      {id: 'aksldjfakl;s', name: 'Eric', age: 34},
      {id: '23ofmweef', name: 'Caitie', age: 29},
      {id: '23iomoi2j3', name: 'Koa', age: 6}
    ],
    inputLength: 0,
    inputValue: '',
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

  fieldChangeHandler = (event) => {
    const pLength = event.target.value.length
    const pValue = event.target.value

    this.setState({
      inputLength: pLength,
      inputValue: pValue
    })
  }

  deleteCharHandler = (charIndex) => {
    const inputValue = this.state.inputValue.split('')
    console.log(inputValue)
    console.log(charIndex)
    inputValue.splice(charIndex, 1);
    console.log(inputValue)
    this.setState({
      inputValue: inputValue.join(''),
      inputLength: inputValue.length
    })
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            )
          })}
        </div>
      )
    }
    let charItems = null
    if (this.state.inputValue.length > 0) {
      let chars = this.state.inputValue.split('')
      charItems = chars.map((char, index) => {
        return (
          <CharComponent 
            click={() => this.deleteCharHandler(index)}
            char={char}
            key={index}
          />
        )
      })

    }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <input type='text' value={this.state.inputValue} onChange={this.fieldChangeHandler}/>
        <p>{this.state.inputLength}</p>
        <ValidationComponent inputLength={this.state.inputLength}/>
        {charItems}
        <br/>
        <button 
        style={style}
        onClick={this.togglePersonsHandler} >Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
