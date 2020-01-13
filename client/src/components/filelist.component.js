import React, { Component } from 'react';
import axios from 'axios';

const File = props => (
    <tr>
        <td> { props.file.courseName } </td>
        <td> { props.file.fileName } </td>
        <td> { props.file.noOfDownloads } </td>
        <td>
            <button type="button" className="btn btn-primary"  onClick={() => {props.downloadFile(props.file._id)}}>Download</button>
        </td>

    </tr> 
)


export default class FileList extends Component {

    constructor(props) {
        super(props)
    
    
        this.downloadFile = this.downloadFile.bind(this);
        this.state = {files: []};
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/files/')
            .then(response => {
                this.setState({ files: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    downloadFile(id) {
        this.setState((prevState, props) => ({
            noOfDownloads: prevState.noOfDownloads +1
        }))

        axios
            .patch(`http://localhost:5000/download/${id}`, {
                id: this.state.files._id
            })
            .then(res => console.log(res))
            .catch(err => console.error(err))

    }

    fileList() {
        return this.state.files
            .map(currentfile => {
                return <File  
                file={currentfile}      
                downloadFile={this.downloadFile}
                key={currentfile._id} />;
        })
    }



    render() {
        return (
            <div>
               <h3>Files</h3>
               <table className="table table-hover">
                    <thead className="thead-light">
                       <tr>
                           <th>Course Name</th>
                           <th>File Name</th>
                           <th>No. of Downloads</th>
                           <th>Action</th>
                       </tr>
                    </thead>

                    <tbody>
                        { this.fileList() }
                    </tbody>
               
                </table>
            </div>
        )
    }
}