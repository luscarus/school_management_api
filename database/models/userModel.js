const { db, sequelize } = require('../db.js')

class User extends db.Model {}

User.init({
    id: {
        type: db.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    userName: {
        type: db.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: db.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: db.DataTypes.STRING,
        allowNull: false,
        unique: true
    }

}, {
    sequelize,    
    modelName: 'user'
    }
)


module.exports = User