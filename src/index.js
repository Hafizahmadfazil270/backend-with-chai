import dotenv, { configDotenv } from 'dotenv'
// import 'dotenv/config'
import connectDB from './db/index.js'
import { app } from './app.js'


dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`backend running on ${process.env.PORT}.`)
        })
    })
    .catch((err) => console.log("MONGODB src/index.js error! ", err))

// const app = express()


















/*
    ; (async () => {
        try {
            await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("DB Connection error", error)
                throw error
            })
            app.listen(process.env.PORT, () => console.log(`listining on ${process.env.PORT}`))
        } catch (error) {
            console.log("ERROR: ", error)
        }
    })()
*/