const router = require('express').Router();
const fileUpload = require('express-fileupload');
let File = require('../models/file.model');

const express = require('express');
const app = express();

app.use(fileUpload());




router.route('/').get((req, res) => {
    File.find()
        .then(files => res.json(files))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const courseName = req.body.courseName;
    const fileName = req.body.fileName;
    const noOfDownloads = req.body.noOfDownloads;
    const filename = req.body.filename;

    const newFile = new File({
        courseName,
        fileName,
        noOfDownloads,
        filename
    });

    newFile.save()
    .then(() => res.json('File added!!!'))
    .catch(err => res.status(400).json('Error: ' + err));

});


router.route('/upload').post((req, res) => {
    if(req.files === null){
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;

    file.mv(`${__dirname}/../client/public/uploads/${file.name}`, err => {
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }
    })
        //res.json({ fileName: upfile.name, filePath: `/uploads/${upfile.name}` })
    })




router.route('/:id').get((req, res) => {
    File.findById(req.params.id)
        .then(file => res.json(file))
        .catch(err => res.status(400).json('Error: ' + err));

});

// router.route('/update/:id').post((req, res) => {
//     File.findById(req.params.id)
//         .then(file => {
//             // file.courseName = req.body.courseName;
//             // file.fileName = req.body.fileName;
//             file.noOfDownloads = file.noOfDownloads + 1;

//             exercise.save()
//                 .then(() => res.json('Updated!!!'))
//                 .catch(err => res.status(400).json('Error: ' + err))
//         })
//         .catch(err => res.status(400).json('Error: ' + err));

// });

module.exports = router;