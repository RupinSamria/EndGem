import React, { Component } from 'react';
import axios from 'axios';


const File = props => (
    <tr>
        <td> { props.file.courseName } </td>
        <td> { props.file.fileName } </td>
        <td> { props.file.noOfDownloads } </td>
    </tr> 
)




export default class LeaderBoard extends Component {

    constructor(props) {
        super(props)
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

    fileList() {
        return this.state.files
            .sort((a,b) => b.noOfDownloads - a.noOfDownloads)
            .map(currentfile => {
                return <File 
                file={currentfile}
                key={currentfile._id} />;
        })
        
    }



    render() {
        return ( 
            <div>
               <h3>Top Gems</h3>
               <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                       <tr>
                           <th scope="col">Course Name</th>
                           <th scope="col">File Name</th>
                           <th scope="col">No. of Downloads</th>
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