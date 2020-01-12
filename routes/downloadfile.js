const router = require('express').Router();
let File = require('../models/file.model');
const download = require('downloadjs');
//const fs = require('fs');

router.route('/:id').patch((req, res) => {
    const noOfDownloads = req.body.noOfDownloads;
    File.findById(req.params.id)
        .then(
            file => {
            file.set(noOfDownloads,noOfDownloads),
            file.save()
                .then(res => console.log(file))
                .catch(err => console.error(err))
            })
        .catch(err => console.error(err))     

});




module.exports = router;




















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
