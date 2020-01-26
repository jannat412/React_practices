import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p style={{color: 'red'}} onClick={props.click}>Delete</p>
            <input className="input" type="text" onChange={props.changed} vaue={props.name}/>
        </div>
    )
};

export default Radium(person);