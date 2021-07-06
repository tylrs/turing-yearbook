import React from 'react';
import './Person.css';

const Person = (props) => {
    // console.log(props)
    let {id, name, photo, quote, superlative} = props.info
    return (
        <section className="student-card">
            <img src={photo} alt={name}/>
            <h3>{name}</h3>
            <i>"{quote}"</i>
            <p>{superlative}</p>
            {props.type === 'students' && <button onClick={() => {props.deleteStudent(id)}}>Delete</button>}
        </section>
    )
}

export default Person;
