const express = require('express')
const cors = require('cors')
const app = express()
const appConfig = require('./config/appConfig.js')
const authController = require('./controllers/api/authController.js')
const verifyToken = authController.verifyToken
const cookieSession = require("cookie-session");

// middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(
    cookieSession({
      name: "shool_app session",
      secret: appConfig.COOKIE_SECRET, // should use as secret environment variable
      httpOnly: true
    })
  );
  

// routers
const authApiRouter = require('./routes/api/authRouter.js')
const userRouter = require('./routes/api/userRouter.js')
const classRoomRouter = require('./routes/api/classRoomRouter.js')
const studentRouter = require('./routes/api/studentRouter.js')
const teacherRouter = require('./routes/api/teacherRouter.js')
const courseRouter = require('./routes/api/courseRouter.js')
const subjectRouter = require('./routes/api/subjectRouter.js')
const followedCourseRouter = require('./routes/api/followedCourseRouter.js')
const classRoomTeacherRouter = require('./routes/api/classRoomTeacherRouter.js')

app.use('/api/auth', authApiRouter)
app.use('/api/v1/school-app/users', userRouter)
app.use('/api/v1/school-app/classrooms', classRoomRouter)
app.use('/api/v1/school-app/students', verifyToken, studentRouter)
app.use('/api/v1/school-app/teachers', teacherRouter)
app.use('/api/v1/school-app/courses', courseRouter)
app.use('/api/v1/school-app/subjects', subjectRouter)
app.use('/api/v1/school-app/followed-courses-students', followedCourseRouter)
app.use('/api/v1/school-app/classes-teachers', classRoomTeacherRouter)


// running app
app.listen(appConfig.PORT, () => {
    console.log(`server is running port ${appConfig.PORT}`)
})