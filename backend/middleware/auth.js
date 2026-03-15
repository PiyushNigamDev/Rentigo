import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
export const Auth=async(req,res,next)=>{
    let token;
const {authorization}=req.headers;
console.log("authorization",authorization)
if(authorization&&authorization.startsWith("Bearer ")){
     token=authorization.split(" ")[1]
    try{
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        req.existingUser= decoded;
next();
    }catch(err){
        return res.status(400).json({
            status:false,
            message:err.message
        })
    }
}else{
    res.status(500).json({
        status:false,
        message:"token not provided"
    })
}
}