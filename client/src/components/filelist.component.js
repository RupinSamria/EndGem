import React, { Component } from 'react';
import axios from 'axios';
//import download from 'downloadjs';


const File = props => (
    <tr>
        <td> { props.file.courseName } </td>
        <td> { props.file.fileName } </td>
        <td> { props.file.noOfDownloads } </td>
        <td>
            {/* <Link to={"/edit/"+props.file._id}>edit</Link> */}
            <button type="button" className="btn btn-primary"  onClick={() => {props.downloadFile(props.file._id)}}>Download</button>
            {/* <a href="/" onClick={() => {props.downloadFile(props.file._id)}}>Download</a> */}
        </td>

    </tr> 
)

//download(`${__dirname}/../../public/uploads/RupinSamria.pdf`);


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
        this.setState({
            _id: this.state.id,
            noOfDownloads: this.state.noOfDownloads + 1
        },
        () => {
            axios.post('http://localhost:5000/download/'+id,{_id: this.state._id, noOfDownloads: this.state.noOfDownloads + 1})
                //.then(res => download(`${__dirname}/../../public/uploads/${res.data.filename}`))
                .then(res =>  console.log(res.data))
        })
               // {this.setState( {noOfDownloads: this.state.noOfDownloads + 1});
            //})

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