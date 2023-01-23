const { db, sequelize } = require('../db.js')

class ClassRoom extends db.Model {}

ClassRoom.init({
    id: {
        type: db.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    name: {
        type: db.DataTypes.STRING,
        allowNull: false
    }
    
}, {
    sequelize,    
    modelName: 'classRoom'
    }
)


module.exports = ClassRoom