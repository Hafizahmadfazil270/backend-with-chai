import dotenv, { configDotenv } from 'dotenv'
// import 'dotenv/config'
import connectDB from './db/index.js'


dotenv.config({
    path: './env'
})

connectDB()

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