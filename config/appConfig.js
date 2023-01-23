require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,

    DB_CONFIG: {
        HOST: process.env.DB_HOST,
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        NAME: process.env.DB_NAME,
        dialect: process.env.dialect,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },

    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,

    COOKIE_SECRET: process.env.COOKIE_SECRET
}