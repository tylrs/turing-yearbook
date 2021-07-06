import React, {Component} from 'react';

class AddStudent extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            quote: '',
            superlative: '',
            photo: 'https://placekitten.com/200/300'
        }
    }

    submitNewStudent = (event) => {

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
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
                    value = ""
                    onChange={() => {this.handleChange()}}
                />
                <label>Student Quote</label>
                <input 
                    type="text"
                    name="quote"
                    placeholder="Student quote"
                    value = ""
                    onChange={() => {this.handleChange()}}
                />
                <label>Student Superlative</label>
                <input 
                    type="text"
                    name="superlative"
                    placeholder="Student Superlative"
                    value = ""
                    onChange={() => {this.handleChange()}}
                />
                <button onClick={() => {this.submitNewStudent()}}>Submit</button>
            </form>
        )
    }
}

export default AddStudent;
