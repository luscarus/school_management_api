const classRoomController = require('../../controllers/api/classRoomController.js')

const router = require('express').Router()


router.post('/', classRoomController.addClassRoom)

router.get('/', classRoomController.getAllClassRooms)

router.get('/:id/', classRoomController.getOneClassRoom)

router.put('/:id/', classRoomController.updateClassRoom)

router.delete('/:id/', classRoomController.deleteClassRoom)


module.exports = router