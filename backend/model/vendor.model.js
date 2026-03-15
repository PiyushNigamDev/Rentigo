import mongoose from "mongoose";
const {Schema}= mongoose;
const VendorSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true,
        maxlength:10,
        minlength:10
        },
    bookingDate:{
        type:Date,
        required:true
    },
    returnDate:{
        type:Date,
        required:true
    },
    carBooked:{
type:mongoose.Schema.Types.ObjectId,
ref:"Car",
// required:true
    },
    status:{
        type:String,
        enum:["Confirmed","Canceled","Pending"],
        default:"Pending",
        required:true
    }
})
export default mongoose.model("Vendor",VendorSchema);