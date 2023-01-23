const { db, sequelize } = require('../db.js')

class Subject extends db.Model {}

Subject.init({
    id: {
        type: db.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    nameSubject: {
        type: db.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,    
    modelName: 'subject'
    }
)


module.exports = Subject