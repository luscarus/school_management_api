const { db, sequelize } = require('../db.js')
const User = require('./userModel.js')

class Session extends db.Model {}

Session.init({
    id: {
        type: db.DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    
    jwToken: {
        type: db.DataTypes.STRING,
        allowNull: false
    }    
}, {
    sequelize,    
    modelName: 'session'
    }
)

// One to Many Relationship between User and Session
User.hasMany(Session);
Session.belongsTo(User, {
    foreignKey: 'userId'
});