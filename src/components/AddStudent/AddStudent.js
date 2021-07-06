import React, {Component} from 'react';

class AddStudent extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
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
            </form>
        )
    }
}

export default AddStudent;
