const subjectController = require('../../controllers/api/subjectController.js')

const router = require('express').Router()


router.post('/', subjectController.addSubject)

router.get('/', subjectController.getAllSubjects)

router.get('/:id/', subjectController.getOneSubject)

router.put('/:id/', subjectController.updateSubject)

router.delete('/:id/', subjectController.deleteSubject)


module.exports = router