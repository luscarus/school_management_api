const Subject = require('../../database/models/subjectModel.js')

// add Subject
const addSubject = async (req, res) => {
    
    const subject = await Subject.create({ subjectName: req.body.subjectName  })
    
    res.status(200).send(subject)
}


// get all Subjects
const getAllSubjects = async (req, res) => {
    
    const subjects = await Subject.findAll({})
    
    res.status(200).send(subjects)
} 


// get a Subject
const getOneSubject = async (req, res) => {

    let id = req.params.id
    const subject = await Subject.findOne({ where: { id: id } })
    
    res.status(200).send(subject)
}


//update Subject infos
const updateSubject = async (req, res) => {

    let id = req.params.id
    const subject = await Subject.update(req.body, { where: { id: id }})
    
    res.status(200).send(subject)
}

//delete a Subject
const deleteSubject = async (req, res) => {

    let id = req.params.id
    await Subject.destroy({ where: { id: id }})
    
    res.status(200).send('Subject has been deleted')
}


module.exports = {
    addSubject,
    getAllSubjects,
    getOneSubject,
    updateSubject,
    deleteSubject
}