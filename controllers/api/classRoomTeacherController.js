const ClassRoomTeacher = require('../../database/models/classRoomTeacherModel.js')

// add class room
const addClassRoomTeacher = async (req, res) => {

    let info = {
        classRoomId: req.body.classRoomId,
        teacherId: req.body.teacherId,
    }
    
    const classRoomTeacher = await Student.create(info)
    
    res.status(200).send(classRoomTeacher)
}


// get all class rooms
const getAllClassRoomTeachers = async (req, res) => {
    
    const classRoomTeachers = await ClassRoomTeacher.findAll({})
    
    res.status(200).send(classRoomTeachers)
} 


// get a class room
const getOneClassRoomTeacher = async (req, res) => {

    let id = req.params.id
    const classRoomTeacher = await ClassRoomTeacher.findOne({ where: { id: id } })
    
    res.status(200).send(classRoomTeacher)
}


//update class rooms infos
const updateClassRoomTeacher = async (req, res) => {

    let id = req.params.id
    const classRoomTeacher = await ClassRoomTeacher.update(req.body, { where: { id: id }})
    
    res.status(200).send(classRoomTeacher)
}

//delete a class room
const deleteClassRoomTeacher = async (req, res) => {

    let id = req.params.id
    deletedClassRoomTeacher = await ClassRoomTeacher.destroy({ where: { id: id }})
    
    res.status(200).send(`class room ${deleteClassRoomTeacher.name} has been deleted`)
}


module.exports = {
    addClassRoomTeacher,
    getAllClassRoomTeachers,
    getOneClassRoomTeacher,
    updateClassRoomTeacher,
    deleteClassRoomTeacher
}