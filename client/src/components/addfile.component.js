import React, { Component } from 'react';
import axios from 'axios';

export default class AddFile extends Component {


    constructor(props) {
        super(props);

        this.onChangeCourseName = this.onChangeCourseName.bind(this);
        this.onChangeFileName = this.onChangeFileName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            courseName: '',
            fileName: '',
            noOfDownloads: 0,
            file: null,
            filename: 'Choose File',
            courses: []

        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/courses/')
            .then(response => {
                if(response.data.length > 0) {
                    this.setState({
                        courses: response.data.map(course => course.courseName),
                        courseName: response.data[0].courseName
                    });
                }
            })
    }


    onChangeCourseName(e) {
        this.setState({
            courseName: e.target.value
        });
    }

    onChangeFileName(e) {
        this.setState({
            fileName: e.target.value
        });
    }

    onChange(e) {
        let file = e.target.files[0];
        let filename = e.target.files[0].name
        this.setState({
            file: file,
            filename: filename
        })

    }





    onSubmit(e) {
        e.preventDefault();

        let file = this.state.file
        
        let formdata = new FormData()

        formdata.append('file', file)
        //formdata.append('file.name', this.state.fileName)

        axios({
            url: `http://localhost:5000/files/upload`,
            method: "POST",
            headers:{
                'Content-Type': 'multipart/form-data'
            },
            data: formdata
        }).then((res)=>{

        })
        
        const formdb = {
            courseName: this.state.courseName,
            fileName: this.state.fileName,
            noOfDownloads: this.state.noOfDownloads,
            filename: this.state.filename
        }


        axios.post('http://localhost:5000/files/add' , formdb)
            .then(res => console.log(res.data))

        // window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Add File</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Course Name: </label>
                        <select ref="courseInput" required className="form-control" value={this.state.courseName} onChange={this.onChangeCourseName}>
                            {
                                this.state.courses.map(function(course){
                                    return <option
                                        key = {course}
                                        value = {course}>{course}
                                        </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>File Name: </label>
                        <input type="text" required className="form-control" value={this.state.fileName} onChange={this.onChangeFileName} />
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile" name="file" onChange={(e)=>this.onChange(e)}/>
                        <label className="custom-file-label" htmlfor="customFile">{this.state.filename}</label>
                    </div>
                    <div className="form-group mt-3">
                        <label>No. of Downloads: </label>
                        <input type="text" className="form-control" value={this.state.noOfDownloads} />
                    </div>
                    <div>
                        <input type="submit" value="Add File" className="btn btn-primary" />
                    </div>
                </form>
                
            </div>
        )
    }
}