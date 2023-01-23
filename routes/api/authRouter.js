const authController = require('../../controllers/api/authController')

const router = require('express').Router()

router.post('/login/', authController.getJWT)

router.post('/refresh-login/', authController.refreshJWT)

router.get('/logout', authController.logOut)


module.exports = router