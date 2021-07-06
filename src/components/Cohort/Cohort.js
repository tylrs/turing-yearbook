import React from 'react';
import Person from '../Person/Person';
import AddStudent from '../AddStudent/AddStudent';
import './Cohort.css';

const Cohort = (props) => {
    console.log('hello', props)
    let cohort = props.people.map(member => <Person key={member.id} info={member}/>);
    return (
        <main className="cohort-container">
            {cohort}
            {props.type === 'students' && <AddStudent />}
        </main>
    )
        
}

export default Cohort;
