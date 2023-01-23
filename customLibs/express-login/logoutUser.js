const Session = require('../../database/models/sessionModel.js')


const logoutUser = async (user) => {
    await Session.destroy({ where: { userId: user.id }})
    return true
}


module.exports = logoutUser