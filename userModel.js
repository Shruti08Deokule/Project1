const mongoose=require("mongoose")
//schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
       
    },
    age:{
        type:Number,
        },
    

},{
    timestamps:true
})

//model
const User=mongoose.model('User',userSchema)

module.exports=User