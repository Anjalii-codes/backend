import mongoose from "mongoose";
import { dbname } from "../constants.js";

const connectdb = async() => {
    try{
       const connectioninstance= await mongoose.connect(`${process.env.MONGODB_URI}/${dbname}`)
       console.log(`MongoDb connected !! DB HOST: ${connectioninstance.connection.host}`)

    }
    catch(error){
        console.log("failed to connect mongo db")
        process.exit(1)
    }
}
export default connectdb