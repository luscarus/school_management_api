const Student = require('../../database/models/studentModel.js')

// add student
const addStudent = async (req, res) => {
    
    let info = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    }

    const student = await Student.create(info)
    
    res.status(200).send(student)
}


// get all students
const getAllStudents = async (req, res) => {
    
    const students = await Student.findAll({})
    
    res.status(200).send(students)
} 


// get a student
const getOneStudent = async (req, res) => {

    let id = req.params.id
    const student = await Student.findOne({ where: { id: id } })
    
    res.status(200).send(student)
}


//update student infos
const updateStudent = async (req, res) => {

    let id = req.params.id
    const student = await Student.update(req.body, { where: { id: id }})
    
    res.status(200).send(student)
}

//delete a student
const deleteStudent = async (req, res) => {

    let id = req.params.id
    await Student.destroy({ where: { id: id }})
    
    res.status(200).send('Student has been deleted')
}


module.exports = {
    addStudent,
    getAllStudents,
    getOneStudent,
    updateStudent,
    deleteStudent
}