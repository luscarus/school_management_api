const User = require('../../database/models/userModel.js')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const appConfig = require('../../config/appConfig.js')
const loginUser = require('../../customLibs/express-login/loginUser.js')


const login = async (req, res) => {
    let username = req.body.username
    let password = req.body.password

    const foundedUser = await User.findOne({ where: { userName: username } })
    if (!foundedUser) return res.status(200).send('User not founded.')

    validPassword = bcrypt.compare(password, foundedUser.password)
    if (validPassword) {
        const jwToken = jwt.sign(
            { useraname: foundedUser.userName},
            appConfig.ACCESS_TOKEN_SECRET
        )

        if(loginUser(foundedUser, jwToken)) {
            console.log() 
        } else {
            console.log('try later!!!')
        }               
    } else {
        console.log('check your password')
    }
}