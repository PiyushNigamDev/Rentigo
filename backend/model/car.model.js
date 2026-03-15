import mongoose from "mongoose";
const {Schema}=mongoose;
const CarSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    model:{
        type:Number,
        required:true

    },
    description:{
        type:String,
        required:true
    },
    fuel_type:{
        type:String,
        enum:["Diesel","Petrol","CNG","Electric"],
        required:true
    },
    type:{
        type:String,
        enum:["SEDAN","XUV","SUV","HATCHBACK"],
        required:true
    },
    seat:{
        type:Number,
        required:true
        
    },
    price:{
        type:Number,
        required:true
    },
    thumbnail:{
        type:String,
required:true
    },
    image:{
        type:String
    },
    car_number:{
        type:String,
        unique:true,
        required:true
    },
status:["Booked"]
})
export default mongoose.model("Car",CarSchema);