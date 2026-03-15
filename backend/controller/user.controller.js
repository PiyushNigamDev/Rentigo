import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from "dotenv"
import User from "../model/user.model.js";
// import  connectDB  from "../config/database.js";
 dotenv.config();


 const jwtgenerate=(existingUser)=>{
 return   jwt.sign({...existingUser},process.env.JWT_SECRET,{
    expiresIn:"7d"
 })
}
// connectDB()
export const Register=async(req,res)=>{
    const {name,email,password}=req.body;
    try{
const user=await User.findOne({email}).select("+password");
if(user){
    return res.status(400).json({status:false,message:"user already exist"});
}
const newUser= await User.create({name,email,password});
return res.status(201).json({status:true,
    message:"user successfully created",
    data:newUser
})
    }catch(err){
        return res.status(500).json({status:false,message:err.message})
    }
}



export const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    try{
    const existingUser=await User.findOne({email}).select("+password");
    if(!(existingUser&&(await existingUser.matchPassword(password)))){
        return res.status(400).json({
            status:false,
            message:"user not logged in"
        })
    }else{
const token=jwtgenerate({
    id:existingUser._id,
    name:existingUser.name,
    email:existingUser.email
})
return res.status(200).json({
    status:true,
    message:"user login successfully",
    token:token
})
    }
     
    
}catch(err){
    return res.status(500).json({
        status:false,
        message:err.message
    })
}
}


