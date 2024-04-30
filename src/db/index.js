import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const dbInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
        // const dbInstance = await mongoose.connect(`${"mongodb+srv://ahmadfazil270:U4Oe3LLQN6sCbdko@cluster0.it9isb3.mongodb.net"}/${DB_NAME}`)
        console.log(`mongodb connected. ${dbInstance.connection.host}`)
    } catch (error) {
        console.log("ERROR: ", error)
        process.exit(1)
    }
}
export default connectDB