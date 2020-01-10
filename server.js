const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const coursesRouter = require('./routes/courses');
const filesRouter = require('./routes/files');
const downloadRouter = require('./routes/downloadfile');
const fileUpload = require('express-fileupload');



const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use('/courses', coursesRouter);
app.use('/files', filesRouter);
app.use('/download', downloadRouter);


mongoose.connect("mongodb://localhost:27017/endgem" , { useNewUrlParser: true , useUnifiedTopology: true}, (error) =>{
    if(!error){
        console.log("Successfully connected to DataBase")
    }
    else{
        console.log("Error in connecting Database : " + error)
    }
})


app.listen(port, () =>{
    console.log(`Server is running on port :${port}`);
})