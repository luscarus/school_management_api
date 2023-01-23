const User = require('../../database/models/userModel.js')
const bcrypt = require("bcrypt")


// add user
const addUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    
    let info = {
        userName: req.body.userName,
        password: await bcrypt.hash(req.body.password, salt),
        email: req.body.email,
    }

    const user = await User.create(info)
    
    res.status(200).send(user)
}


// get all users
const getAllUsers = async (req, res) => {
    
    const users = await User.findAll({})
    
    res.status(200).send(users)
} 


// get a user
const getOneUser = async (req, res) => {

    let id = req.params.id
    const user = await User.findOne({ where: { id: id } })
    
    res.status(200).send(user)
}


//update user infos
const updateUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10);

    let id = req.params.id

    req.body.password = await bcrypt.hash(req.body.password, salt)
    
    const user = await User.update(req.body, { where: { id: id }})
    
    res.status(200).send(user)
}

//delete a user
const deleteUser = async (req, res) => {

    let id = req.params.id
    await User.destroy({ where: { id: id }})
    
    res.status(200).send({ message: 'User has been deleted' })
}


module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
}