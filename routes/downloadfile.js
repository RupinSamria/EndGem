const router = require('express').Router();
let File = require('../models/file.model');
const download = require('downloadjs');
//const fs = require('fs');

router.route('/:id').post((req, res) => {

    File.findById(req.params.id)
        .then(file => {
            file.noOfDownload = req.body.noOfDownload + 1;
            //res.download(`${__dirname}/../client/public/uploads/${file.filename}
            file.save()
                //.then(download(`${__dirname}/../client/public/uploads/${file.filename}`))
                .then(() => res.download(`${__dirname}/../client/public/uploads/${file.filename}`))
                //.then(() => res.json('Updated!!!' + file.filename))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;