import React, {Component} from 'react';

class AddStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            quote: '',
            superlative: '',
            photo: 'https://placekitten.com/200/300'
        }
    }

    submitNewStudent = (event) => {
        event.preventDefault();
        console.log(this.props)
        let newStudent = this.state;
        this.props.addStudent(newStudent);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    clearInput = () => {
        this.setState({
            name: '',
            quote: '',
            superlative: '',
            photo: 'https://placekitten.com/200/300'
        })
    }

    render() {
        return (
            <form>
                <label>Student Name</label>
                <input 
                    type="text"
                    name="name"
                    placeholder="Student Name"
                    value = {this.state.name}
                    onChange={(event) => {this.handleChange(event)}}
                />
                <label>Student Quote</label>
                <input 
                    type="text"
                    name="quote"
                    placeholder="Student quote"
                    value = {this.state.quote}
                    onChange={(event) => {this.handleChange(event)}}
                />
                <label>Student Superlative</label>
                <input 
                    type="text"
                    name="superlative"
                    placeholder="Student Superlative"
                    value = {this.state.superlative}
                    onChange={(event) => {this.handleChange(event)}}
                />
                <button onClick={(event) => {this.submitNewStudent(event)}}>Submit</button>
            </form>
        )
    }
}

export default AddStudent;
