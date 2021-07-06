import React from 'react';
import './Person.css';

const Person = (props) => {
    console.log(props)
    let {name, photo, quote, superlative} = props.info
    return (
        <section>
            <img src={photo} alt={name}/>
            <h3>{name}</h3>
            <i>"{quote}"</i>
            <p>{superlative}</p>
        </section>
    )
}

export default Person;
