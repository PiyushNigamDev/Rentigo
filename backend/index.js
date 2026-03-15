import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/database.js";
import router from "./routerr/router.js";
import { getAppoint } from "./controller/appointment.controller.js";
import { vendorGet } from "./controller/vendor.controller.js";
import userModel from "./model/user.model.js";
import carModel from "./model/car.model.js";
connectDB();
dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());
const Port=5000;

app.use("/uploads", express.static("uploads"));

app.use("/user",router);
app.get("/appointments",getAppoint);

// app.get("/",()=>{
//     console.log("api is running");
// })

app.get("/getvendor",vendorGet);

// app.post("/appointments", aappoint);



// app.get("/cars",(req,res)=>{
//     console.log(req.query);
//     console.log(`search for ${req.query.search} car `)
// })

app.get("/search",async(req,res)=>{
    let keyword=req.query.q;
    let result=await carModel.find({
        name:{$regex:keyword,$options:"i"}
    });
    res.json(result)
})

app.listen(Port,()=>{
    console.log(`server is running on ${Port}`)
})