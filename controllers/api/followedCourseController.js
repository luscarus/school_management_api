const FollowedCourse = require('../../database/models/followedCourseModel.js')

// add followedCourse
const addFollowedCourse = async (req, res) => {
    
    let info = {
        studentId: req.body.studentId,
        courseId: req.body.courseId,
        grade: req.body.grade,
    }

    const followedCourse = await FollowedCourse.create(info)
    
    res.status(200).send(followedCourse)
}


// get all followedCourses
const getAllFollowedCourses = async (req, res) => {
    
    const followedCourses = await FollowedCourse.findAll({})
    
    res.status(200).send(followedCourses)
} 


// get a followedCourse
const getOneFollowedCourse = async (req, res) => {

    let id = req.params.id
    const followedCourse = await FollowedCourse.findOne({ where: { id: id } })
    
    res.status(200).send(followedCourse)
}


//update followedCourse infos
const updateFollowedCourse = async (req, res) => {

    let id = req.params.id
    const followedCourse = await FollowedCourse.update(req.body, { where: { id: id }})
    
    res.status(200).send(followedCourse)
}

//delete a followedCourse
const deleteFollowedCourse = async (req, res) => {

    let id = req.params.id
    await FollowedCourse.destroy({ where: { id: id }})
    
    res.status(200).send('FollowedCourse has been deleted')
}


module.exports = {
    addFollowedCourse,
    getAllFollowedCourses,
    getOneFollowedCourse,
    updateFollowedCourse,
    deleteFollowedCourse
}