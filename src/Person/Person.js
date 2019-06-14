import React from 'react'
// import Radium from 'radium'
import classes from './Person.css'

const Person = (props) => {
    
    const rnd = Math.random();
    if(rnd > .7) {
        throw new Error('Something went wrong')
    }
    
    return (
    <div className={classes.Person}>
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" value={props.name} onChange={props.changed}/>
    </div>
    )
}

export default Person