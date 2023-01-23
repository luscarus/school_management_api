const ClassRoom = require('../../database/models/classRoomModel.js')

// add class room
const addClassRoom = async (req, res) => {
    
    const classRoom = await Student.create({ name: req.body.name })
    
    res.status(200).send(classRoom)
}


// get all class rooms
const getAllClassRooms = async (req, res) => {
    
    const classRooms = await ClassRoom.findAll({})
    
    res.status(200).send(classRooms)
} 


// get a class room
const getOneClassRoom = async (req, res) => {

    let id = req.params.id
    const classRoom = await ClassRoom.findOne({ where: { id: id } })
    
    res.status(200).send(classRoom)
}


//update class rooms infos
const updateClassRoom = async (req, res) => {

    let id = req.params.id
    const classRoom = await ClassRoom.update(req.body, { where: { id: id }})
    
    res.status(200).send(classRoom)
}

//delete a class room
const deleteClassRoom = async (req, res) => {

    let id = req.params.id
    deletedClassRoom = await ClassRoom.destroy({ where: { id: id }})
    
    res.status(200).send(`class room ${deleteClassRoom.name} has been deleted`)
}


module.exports = {
    addClassRoom,
    getAllClassRooms,
    getOneClassRoom,
    updateClassRoom,
    deleteClassRoom
}