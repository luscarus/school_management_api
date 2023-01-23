const { db, sequelize } = require('../db.js')
const ClassRoom = require('./classRoomModel.js')
const Teacher = require('./teacherModel.js')


class ClassRoomTeacher extends db.Model {}

ClassRoomTeacher.init({
    id: {
        type: db.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      classRoomId: {
        type: db.DataTypes.INTEGER,
        references: {
          model: ClassRoom, 
          key: 'id'
        }
      },
      teacherId: {
        type: db.DataTypes.INTEGER,
        references: {
          model: Teacher, 
          key: 'id'
        }
    }
}, {
    sequelize,    
    modelName: 'classRoomTeacher'
    }
)

// Many to Many relationship between ClassRoom and Teacher
ClassRoom.belongsToMany(Teacher, { through: ClassRoomTeacher });
Teacher.belongsToMany(ClassRoom, { through: ClassRoomTeacher });


module.exports = ClassRoomTeacher