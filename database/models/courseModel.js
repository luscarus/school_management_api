const { db, sequelize } = require('../db.js')
const ClassRoom = require('./classRoomModel.js')
const Subject = require('./subjectModel.js')

class Course extends db.Model {}

Course.init({
    id: {
        type: db.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    startAt: {
        type: db.DataTypes.DATE,
        allowNull: false,
    },
    endAt: {
        type: db.DataTypes.DATE,
        allowNull: false,
    },
    completed: {
        type: db.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }    
}, {
    sequelize,    
    modelName: 'course'
    }
)

// One to Many Relationship between ClassRoom and Course
ClassRoom.hasMany(Course);
Course.belongsTo(ClassRoom, {
    foreignKey: 'classRoomId'
});

// One to Many Relationship between Subject and Course
Subject.hasMany(Course);
Course.belongsTo(Subject, {
    foreignKey: 'subjectId'
});



module.exports = Course