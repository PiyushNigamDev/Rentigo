import Appoint from "../model/appointment.model.js"
 
export const aappoint=async(req,res)=>{
    // const userId=req.user.id;
const {user,name,car,vendor,bookingDate,returndate,pickUp,dropPoint}=req.body;
try{
     
    const newBook=await Appoint.create({
        user,
        name,
        vendor,
        car,
        bookingDate,
        returndate,
        pickUp,
        dropPoint
    
    })
    return res.status(201).json({
        status:true,
        message:"Appointment is booked",
        data:newBook
    })

}catch(err){
    return res.status(500).json({
        status:false,
        message:err.message
    })
}
}


export const getAppoint=async(req,res)=>{
    try{
        const appointments=await Appoint.find(req.body)
        .populate("user")
        .populate("car")
        .populate("vendor")
        .lean()
        return res.status(201).json({
            status:true,
            message:"succesfully user taked the appointment",
            data:appointments
        })

    }catch(err){
        return res.status(500).json({
            status:false,
            message:err.message
        })
    }
}



