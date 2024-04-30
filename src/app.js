import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

// ye traffic ko alow krwany k liye k kon kon c traffic aa skti hy
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// hmary page py agr koi json data bhej sky ya nhi with limit.. through 'forms'
app.use(express.json({
    limit: "16kb"
}))
// ye config zrori hy url sy data get krny k liye
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
// ye config use hoti hy static files (images,pdf...) wgera ko apny server my rkhy or use krny k liye
app.use(express.static("public"))
// ye client k browser pr cookies ko server k through cookie read and write krny liye use hota hy
app.use(cookieParser())

export { app }