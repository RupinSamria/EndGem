const router = require('express').Router();
let File = require('../models/file.model');
//const download = require('download-file');
const download = require('downloadjs');
const http = require('http');
const fs = require('fs');


router.route('/:id').patch((req, res) => { 
  let id = req.params.id;
  let down = File.findOne({_id : id })
  File.findOneAndUpdate({_id : id}, {$inc : {'down.noOfDownloads' : 1}})
});




module.exports = router;










// File.findById(req.params.id,()=>{
//     //const filedownload = fs.createWriteStream()
//     download(`${__dirname}/../client/public/uploads/${File.filename}`)
// })
//     .then(
//         file => {
        
//         file.save()
//             .then(res => console.log(file))
//             .catch(err => console.error(err))
//         })
//     .catch(err => console.error(err))     











//////////////////////////////////////////////////////////////





//const noOfDownloads = req.body.noOfDownloads;

//  let updateFile = new File ({
//     courseName,
//     fileName,
//     noOfDownloads,
//     filename
// });


// // File.findById(req.params.id)
// //     .then(file => {
// //         file.save()
// //             .then(() => res.json('File updated!!'))
// //             .catch(err => res.status(400).json('Error: ' + err));
// //     })
// //     .catch(err => res.status(400).json('Error: ' + err));

// File.findById(req.params.id)
//     .then(
//         file => updateFile.save(file)
//             .then(res => console.log(res))
//             .catch(err => console.error(err))
//     )
