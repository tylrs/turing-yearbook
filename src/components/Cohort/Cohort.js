import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const cohort = () => {
    let cohort = props.staff.map(member => <Person key={member.id} info={member}/>)
    return (
        <main>
            {cohort}
        </main>
    )
        
}

export default Cohort;
