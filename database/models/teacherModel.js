const { db, sequelize } = require('../db.js')

class Teacher extends db.Model {}

Teacher.init({
    id: {
        type: db.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    firstName: {
        type: db.DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: db.DataTypes.STRING
    },
    email: {
        type: db.DataTypes.STRING,
        allowNull: false,
        unique: true
    }

}, {
    sequelize,    
    modelName: 'teacher'
    }
)


module.exports = Teacher