const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const coursesRouter = require('./routes/courses');
const filesRouter = require('./routes/files');
const downloadRouter = require('./routes/downloadfile');
const fileUpload = require('express-fileupload');



const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use('/courses', coursesRouter);
app.use('/files', filesRouter);
app.use('/download', downloadRouter);


mongoose.connect("mongodb+srv://dbEndGem:dbEndGem@cluster0-b6wqj.mongodb.net/test?retryWrites=true&w=majority" , { useNewUrlParser: true , useUnifiedTopology: true}, (error) =>{
    if(!error){
        console.log("Successfully connected to DataBase")
    }
    else{
        console.log("Error in connecting Database : " + error)
    }
})


app.listen(PORT, () =>{
    console.log(`Server is running on port :${PORT}`);
})