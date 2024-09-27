const express=require("express")
const mongoose=require("mongoose")
const app=express()
const Port=(8000)
app.use(express.json)
const url="mongodb://localhost:27017/Fire"
mongoose.connect(url).then(()=>{
    console.log("connected")
}) 
const userSchema =new mongoose.Schema({
    name:String,
    age:Number
})
const userModel =new mongoose.Model("user",userSchema)

app.post('/user',(req,res)=>{
name:req.body.name,
age:req.body.age
})
