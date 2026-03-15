import Car from "../model/car.model.js";
import Razorpay from "razorpay" 
export const carCreate = async (req, res) => {
  try {
    const {
      name,
      model,
      description,
      type,
      fuel_type,
      car_number,
      seat,
      price
    } = req.body;

     const existCar = await Car.findOne({ car_number });
    if (existCar) {
      return res.status(400).json({
        status: false,
        message: "Car already exists",
      });
    }

     const carData = {
      name,
      model,
      description,
      type,
      fuel_type,
      car_number,
      seat,
      price,
    };

    // Handle image upload
    if (req.file) {
      carData.thumbnail = `uploads/${req.file.filename}`;
    }

    // Create new car
    const newCar = await Car.create(carData);

    return res.status(201).json({
      status: true,
      message: "Car successfully created",
      data: newCar,
    });

  } catch (err) {
    return res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};




export const updateCar=async(req,res)=>{
  
    try{
      if(req.file){
req.body.thumbnail=`uploads/${req.file.filename}`
}
const update=await Car.findByIdAndUpdate(req.params.id,req.body,{new:true})
 
    return res.status(200).json({
        status:true,
        message:"successfully updated car data",
        data:update
    })

    }catch(err){
        return res.status(500).json({
            status:false,
            message:err.message
    })
}
}

export const deleteCar=async(req,res)=>{
    try{
const Delete =await Car.findByIdAndDelete(req.params.id)
    return res.status(200).json({
        status:true,
        message:"successfully delete car data",
        data:Delete
    })

    }catch(err){
        return res.status(500).json({
            status:false,
            message:err.message
    })
}
}


export const getCar=async(req,res)=>{
    try{
const Get=await Car.find(req.body)
    return res.status(200).json({
        status:true,
        message:"successfully get car data",
        data:Get
    })

    }catch(err){
        return res.status(500).json({
            status:false,
            message:err.message
    })
}
}


export const getCarById=async(req,res)=>{
  try{
    const carId=await Car.findById(req.params.id);
return res.status(201).json({
  status:true,
  message:"successfully get the car by Id",
  data:carId
})
}catch(err){
  return res.status(500).json({
    status:false,
    message:err.message
  })
}}


export const orderId=async(req,res)=>{
  try{
    const instance=new Razorpay({
      key_id:"rzp_test_SDyBLosgN5EUJ6",
      key_secret:"4HUVuVrgedF8ybt6x8EiQ0Y8"
    })
    let result=await instance.orders.create({
      amount:req.body.amount*100,
      currency:"INR"
    });
    console.log(result);
    res.status(200).json({
      status:true,
      message:"order",
      data:result
    });
  }catch(err){
    res.status(500).json({
      status:false,
      message:err.message,

    })
  }
}


export const verifyOrder=async(req,res)=>{
  try{
    const instance=new Razorpay({
      key_id:"rzp_test_SDyBLosgN5EUJ6",
      key_secret:"4HUVuVrgedF8ybt6x8EiQ0Y8"
    });
    let result=await instance.payments.fetch(req.params.id);

    if(result.status==="authorized"){
      await instance.payments.capture(req.params.id,result.amount,"INR");
    }

    if(result.status==="failed"||result.status==="pending"||result.status==="created"){
      result.status(500).json({
        status:false,
        message:"failed"
      });
    }
    res.status(200).json({
      status:true,
      messgae:"verify",
      data:result
    });

  }catch(err){
    res.status(500).json({
      status:false,
      message:err.message
    })
  }
}


export const fetchOrder=async(req,res)=>{
  try{
    const instance=new Razorpay({
      key_id:"rzp_test_SDyBLosgN5EUJ6",
      key_secret:"4HUVuVrgedF8ybt6x8EiQ0Y8"
    })
    let result=await instance.orders.fetchPayments(req.params.id);
 res.status(200).json({
      status:true,
      messgae:"fetch order",
      data:result
    });
  }catch(err){
    res.status(500).json({
      status:false,
      message:err.message
    }
    )
  }
}