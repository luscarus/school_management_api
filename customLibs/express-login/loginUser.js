const Session = require('../../database/models/sessionModel.js')


const loginUser = async (user, jwt) => {
    session = await Session.findOne({ where: { userId: user.id } })
    
    if (session) {
        session.userId = user.id
        session.jwToken = jwt        
        await session.save();
        return true 

    } else {
        newSession = await Session.create({
            userId: user.id,
            jwToken: jwt
        })
        return true
    }
      
}


module.exports = loginUser