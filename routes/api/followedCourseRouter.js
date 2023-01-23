const followedCourseController = require('../../controllers/api/followedCourseController.js')

const router = require('express').Router()


router.post('/', followedCourseController.addFollowedCourse)

router.get('/', followedCourseController.getAllFollowedCourses)

router.get('/:id/', followedCourseController.getOneFollowedCourse)

router.put('/:id/', followedCourseController.updateFollowedCourse)

router.delete('/:id/', followedCourseController.deleteFollowedCourse)


module.exports = router