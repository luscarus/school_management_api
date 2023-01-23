const appConfig = require('../config/appConfig.js')
const dbConfig = appConfig.DB_CONFIG

const {Sequelize, DataTypes, Model} = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.NAME,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: '0',

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected...')
})
.catch(err => {
    console.log('Error'+ err)
})

db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.DataTypes = DataTypes
db.Model = Model

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes resync done!')
})


module.exports = { db, sequelize }
