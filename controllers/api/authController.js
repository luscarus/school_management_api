const User = require('../../database/models/userModel.js')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const appConfig = require('../../config/appConfig.js')


const getJWT = async (req, res) => {
    
    let username = req.body.username
    let password = req.body.password

    const foundUser = await User.findOne({ where: { userName: username } })

    if (!foundUser) {
        res.status(200).send({message: 'User not founded'})
    }

    const validPassword = await bcrypt.compare(password, foundUser.password)
    if (validPassword) {

        // create JSON WEB TOKENS
        const accessToken = jwt.sign(
            { "username": foundUser.userName},
            appConfig.ACCESS_TOKEN_SECRET,
            { expiresIn: '10m' }
        )

        const refreshToken = jwt.sign(
            { "username": foundUser.userName},
            appConfig.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        )

        req.session.token = accessToken

        res.status(200).send({ message: 'Token generated successfully', accessToken: accessToken, refreshToken: refreshToken })
    
    } else {
        res.status(200).send({message: "Password is not valid"})
    }
    
}

// middleware
const verifyToken = (req, res, next) => {
    /*const authHeader = req.headers['authorization'];
    if (!authHeader) return res.sendStatus(401)
    console.log(authHeader)

    const token = authHeader.split(' ')[1]*/
    
    let token = req.session.token
    if (!token) {
        return res.status(403).send({
          message: "No token provided!",
        });
      }
    jwt.verify(
        token,
        appConfig.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403)
            req.user = decoded.username
            next()
        }
    )
}


const refreshJWT = async (req, res) => {
    /*const authHeader = req.headers['authorization'];
    let username = req.body.username
    let password = req.body.password

    if (!authHeader) return res.sendStatus(401)
    console.log(authHeader)   
    const refreshToken = authHeader.split(' ')[1]

    const foundedUser = await User.findOne({ where: { userName: username }})
    if (!foundedUser) return res.sendStatus(401) */

    if (!req.session.token) return res.status(401).send({ message: 'unauthorized' })
    const refreshToken = req.session.token
    
    const validPassword = await bcrypt.compare(password, foundedUser.password)
    if (validPassword) {
        jwt.verify(
            refreshToken,
            appConfig.ACCESS_TOKEN_SECRET,
            (err, decoded) => {
                if (err) return res.status(403).send({ message: 'forbidden' })
                const accessToken = jwt.sign(
                    { "username": decoded.username },
                    appConfig.ACCESS_TOKEN_SECRET,
                    { expiresIn: '10m' }
                ) 
                res.json({ accessToken })               
            }
        )
    }
}


const logOut = async (req, res) => {
    //res.removeHeader('authorization')
    req.session = null;
    res.status(200).send({
        message: "You've been signed out!"
      });
}
 


module.exports = {
    getJWT,
    verifyToken,
    refreshJWT,
    logOut
}