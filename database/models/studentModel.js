const { db, sequelize } = require('../db.js')

class Student extends db.Model {}

Student.init({
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
    modelName: 'student'
    }
)


module.exports = Student