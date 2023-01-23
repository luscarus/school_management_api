const studentController = require('../../controllers/api/studentController.js')

const router = require('express').Router()


router.route('/')
    .post(studentController.addStudent)
    .get(studentController.getAllStudents)

router.route('/:id/')
    .get(studentController.getOneStudent)
    .put(studentController.updateStudent)
    .delete(studentController.deleteStudent)


module.exports = router