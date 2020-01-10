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

const uri = process.env.ATLAS_URI;
mongoose.connect( process.env.ATLAS_URI || 'mongodb://localhost/endgem' , { useNewUrlParser: true , useUnifiedTopology: true}, (error) =>{
    if(!error){
        console.log("Successfully connected to DataBase")
    }
    else{
        console.log("Error in connecting Database : " + error)
    }
})

//for heruko deployment
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res) => {
        res.sendFile(path.join(__dirname, 'client', 'built', 'index.html')); //relative path
    });
}


app.listen(PORT, () =>{
    console.log(`Server is running on port :${PORT}`);
})