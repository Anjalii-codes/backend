import mongoose from "mongoose";
import {dbname} from "./constants.js"
import connectdb from "./db/index.js";
import dotenv from "dotenv"
dotenv.config({path:'/.env'})
 
connectdb()





/* --- first approch 
import express from "express"
const app=express()
(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${dbname}`)
       app.on("error",(error)=>{
        console.log("Errr",error)
        throw error
       })
       app.listen(process.env.PORT,() =>{
            console.log(`App is listening on port ${process.env.PORT}`)

       })

    }
    catch(error){
        console.error("Error :",error)
        throw err
    }
})()*/