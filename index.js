const express=require("express");
require("dotenv").config()


const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
      return res.send("Api is Working")
})

app.get("/ping",(req,res)=>{
      return res.send("Pong")
})

const PORT=process.env.PORT;

app.listen(8080, ()=>{
      console.log(`Api running on ${PORT}`)
})