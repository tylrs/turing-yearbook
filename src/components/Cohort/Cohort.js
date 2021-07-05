import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = (props) => {
    console.log('hello', props)
    let cohort = props.people.map(member => <Person key={member.id} info={member}/>);
    return (
        <main>
            {cohort}
        </main>
    )
        
}

export default Cohort;
