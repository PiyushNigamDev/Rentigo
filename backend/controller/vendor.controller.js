import vendorModel from "../model/vendor.model.js";

export const createVendor=async(req ,res)=>{
    const {name,mobile,bookingDate,returnDate,carBooked,status}=req.body;
    try{
const existVendor=await vendorModel.findOne({mobile});
if(existVendor){
    return res.status(400).json({
        status:false,
        message:"vendor already exist",
    
    })
}
const newVendor= await vendorModel.create(req.body);
return res.status(201).json({
    status:true,
    message:"vendor successfully created",
    data:newVendor
})
    }catch(err){
        return res.status(500).json({
            status:false,
            message:err.message
        })
    }
}


export const vendorGet=async(req,res)=>{
    try{
        const Get=await vendorModel.find(req.body).populate("carBooked").lean();
        console.log(Get)
        return res.status(200).json({
            status:true,
            message:"successfully get data",
            data:Get
        })
    }catch(err){
        return res.status(500).json({
            status:false,
            message:err.message
        })
    }
}



export const vendorUpdate=async(req,res)=>{
    try{
        const update= await vendorModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).json({
            status:true,
            message:"successfully updated data",
            data:update
    })
}catch(err){
return res.status(500).json({
    status:false,
    message:err.message
}
)
}
}

export const vendorDelete=async(req,res)=>{
    try{
const Delete= await vendorModel.findByIdAndDelete(req.params.id);
return res.status(200).json({
    status:true,
    messsage:"succesfullu deleted data",
    data:Delete
})
    }catch(err){
        return res.status(500).json({
            status:false,
            message:err.message
        })
    }
}