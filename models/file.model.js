const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fileSchema = new Schema({
    courseName: {type: String, required: true},
    fileName: {type: String, required: true},
    noOfDownloads: {type: Number},
    filename: {type: String}
}, {
    timestamps: true,    
});

const File = mongoose.model('File', fileSchema);

module.exports = File;