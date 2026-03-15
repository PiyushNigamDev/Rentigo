import mongoose from "mongoose";
const {Schema}=mongoose;
const AppointmentSchema=new Schema({
     user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
     },
     name:{
        type:String,
        required:true
     },
     vendor:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Vendor" ,
       required:true
     },
     car:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Car",
        required:true
     },
     email:{
type:String
     },
     bookingDate:{
        type:Date

     },
     returnDate:{
        type:Date
     },
     status:{
        type:String,
        enum:["Confirmed","Cancelled","Pending"],
        default:"Pending"
     },
     pickUp:{
        type:String
},
dropPoint:{
    type:String
}


},{
    timestamps:true
}
)
export default mongoose.model("Appoint",AppointmentSchema)