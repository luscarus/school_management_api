const Course = require('../../database/models/courseModel.js')

// add course
const addCourse = async (req, res) => {
    
    let info = {
        subjectId: req.body.subjectId,
        classRoomId: req.body.classRoomId,
        startAt: req.body.startAt,
        endAt: req.body.endAt
    }

    const course = await Course.create(info)
    
    res.status(200).send(course)
}


// get all courses
const getAllCourses = async (req, res) => {
    
    const courses = await Course.findAll({})
    
    res.status(200).send(courses)
} 


// get a course
const getOneCourse = async (req, res) => {

    let id = req.params.id
    const course = await Course.findOne({ where: { id: id } })
    
    res.status(200).send(course)
}


//update course infos
const updateCourse = async (req, res) => {

    let id = req.params.id
    const course = await Course.update(req.body, { where: { id: id }})
    
    res.status(200).send(course)
}

//delete a course
const deleteCourse = async (req, res) => {

    let id = req.params.id
    await Course.destroy({ where: { id: id }})
    
    res.status(200).send('Course has been deleted')
}


module.exports = {
    addCourse,
    getAllCourses,
    getOneCourse,
    updateCourse,
    deleteCourse
}