// require ('dotenv').config({path:'./env'})

import connectDB from "./db/index.js"

dotenv.config({
    path:'./env'
})
 
connectDB()
.then(()=>{
    application.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
.catch(()=>{
    console.log("MONGO db connection failed !!!",err)
})
})
/*
import express from "express"
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        application.om("error",(error)=>{
            console.log("ERRR: ",error);
            throw err
        })

        application.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch(error){
        console.error("ERROR: ",error)
        throw err
    }
})()*/