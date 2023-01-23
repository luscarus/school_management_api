const { db, sequelize } = require('../db.js')
const Course = require('./courseModel.js')
const Student = require('./studentModel.js')

class FollowedCourse extends db.Model {}

FollowedCourse.init({
    id: {
        type: db.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      courseId: {
        type: db.DataTypes.INTEGER,
        references: {
          model: Course, 
          key: 'id'
        }
      },
      studentId: {
        type: db.DataTypes.INTEGER,
        references: {
          model: Student, 
          key: 'id'
        }
    },
    grade: {
        type: db.DataTypes.REAL
    }
}, {
    sequelize,    
    modelName: 'followedCourse'
    }
)

// Many to Many relationship between ClassRoom and Teacher
Course.belongsToMany(Student, { through: FollowedCourse });
Student.belongsToMany(Course, { through: FollowedCourse });


module.exports = FollowedCourse