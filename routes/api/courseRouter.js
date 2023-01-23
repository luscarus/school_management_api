const courseController = require('../../controllers/api/courseController.js')

const router = require('express').Router()


router.post('/', courseController.addCourse)

router.get('/', courseController.getAllCourses)

router.get('/:id/', courseController.getOneCourse)

router.put('/:id/', courseController.updateCourse)

router.delete('/:id/', courseController.deleteCourse)


module.exports = router