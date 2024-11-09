import express from 'express'
import dotenv from "dotenv"
import connectDB from './db/index.js'




dotenv.config({
  path:'./env'
})

const app = express()

app.get("/",(req,res)=>{
  res.send("<div><h1>Hello This is Abhishek </h1></div>")
})

connectDB()
.then(()=>{
  app.on("error",(error)=>{
    console.log("error in server js file to connect db ");
    throw error
    
  })
  app.listen(process.env.PORT||5000,()=>{
    console.log(`app is listing is at ${process.env.BASE_URL}${process.env.PORT}`);
    
  })
}
)
.catch((error)=>{
  console.log("error:");
  
})
