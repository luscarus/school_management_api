const teacherController = require('../../controllers/api/teacherController.js')

const router = require('express').Router()


router.post('/', teacherController.addTeacher)

router.get('/', teacherController.getAllTeachers)

router.get('/:id/', teacherController.getOneTeacher)

router.put('/:id/', teacherController.updateTeacher)

router.delete('/:id/', teacherController.deleteTeacher)


module.exports = router