const router = require('express').Router();
let Course = require('../models/course.model');

router.route('/').get((req, res) => {
    Course.find()
        .then(courses => res.json(courses))
        .catch(err => res.status(400).json('Error: ' + err));

});
 
router.route('/add').post((req, res) => {
    const courseName = req.body.courseName;

    const newCourse = new Course({courseName});

    newCourse.save()
        .then(() => res.json('Course Added!!!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;