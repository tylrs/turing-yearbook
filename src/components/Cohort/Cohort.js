import React from 'react';
import Person from '../Person/Person';
import AddStudent from '../AddStudent/AddStudent';
import './Cohort.css';

const Cohort = (props) => {
    // console.log('hello', props)
    let cohort = props.people.map(member => <Person type={props.type} key={member.id} info={member} deleteStudent={props.deleteStudent}/>);
    return (
        <main className="cohort-container">
            {cohort}
            {props.type === 'students' && <AddStudent addStudent={props.addStudent}/>}
        </main>
    )
        
}

export default Cohort;
