import React, { Component } from 'react';
import axios from 'axios';

export default class CreateCourse extends Component {
    constructor(props) {
        super(props);

        this.onChangeCourseName = this.onChangeCourseName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            courseName: '',
        }
    }
    
    
    onChangeCourseName(e) {
        this.setState({
            courseName: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const course = {
            courseName: this.state.courseName,
        }
    
        console.log(course);

        axios.post('http://localhost:5000/courses/add', course)
            .then(res => console.log(res.data));
            


        this.setState ({
            courseName: '',
        })
    }
    
    render() {

        return (
            <div>
                <h3>Create New Course</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Course Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.courseName}
                            onChange={this.onChangeCourseName}
                            />

                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Course" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}