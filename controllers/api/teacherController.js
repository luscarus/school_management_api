const Teacher = require('../../database/models/teacherModel.js')

// add teacher
const addTeacher = async (req, res) => {
    
    let info = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    }

    const teacher = await Teacher.create(info)
    
    res.status(200).send(teacher)
}


// get all teachers
const getAllTeachers = async (req, res) => {
    
    const teachers = await Teacher.findAll({})
    
    res.status(200).send(teachers)
} 


// get a teacher
const getOneTeacher = async (req, res) => {

    let id = req.params.id
    const teacher = await Teacher.findOne({ where: { id: id } })
    
    res.status(200).send(teacher)
}


//update teacher infos
const updateTeacher = async (req, res) => {

    let id = req.params.id
    const teacher = await Teacher.update(req.body, { where: { id: id }})
    
    res.status(200).send(teacher)
}

//delete a teacher
const deleteTeacher = async (req, res) => {

    let id = req.params.id
    await Teacher.destroy({ where: { id: id }})
    
    res.status(200).send('Teacher has been deleted')
}


module.exports = {
    addTeacher,
    getAllTeachers,
    getOneTeacher,
    updateTeacher,
    deleteTeacher
}