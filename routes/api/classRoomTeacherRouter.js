const classRoomTeacherController = require('../../controllers/api/classRoomTeacherController.js')

const router = require('express').Router()


router.post('/', classRoomTeacherController.addClassRoomTeacher)

router.get('/', classRoomTeacherController.getAllClassRoomTeachers)

router.get('/:id/', classRoomTeacherController.getOneClassRoomTeacher)

router.put('/:id/', classRoomTeacherController.updateClassRoomTeacher)

router.delete('/:id/', classRoomTeacherController.deleteClassRoomTeacher)


module.exports = router