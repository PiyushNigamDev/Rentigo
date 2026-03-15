import express from "express";
import { loginUser, Register } from "../controller/user.controller.js";
import { carCreate, deleteCar, fetchOrder, getCar, getCarById, orderId, updateCar, verifyOrder } from "../controller/car.controller.js";
import { createVendor, vendorDelete, vendorGet, vendorUpdate } from "../controller/vendor.controller.js";
import  {Auth}  from "../middleware/auth.js";
import upload from "../middleware/multer.js";
import {  aappoint} from "../controller/appointment.controller.js";
const router=express.Router();
router.post("/register",Register);
router.post("/login",loginUser);



router.put("/:id",upload.single("thumbnail"), updateCar),
router.post("/",upload.single("thumbnail"),carCreate),
router.get("/",getCar),
router.delete("/:id",deleteCar),
router.get("/:id",getCarById)


router.post("/createVendor",createVendor)
// router.get("/getVendor",vendorGet)
router.put("/updateVendor/:id",vendorUpdate)
router.delete("/delete/:id",vendorDelete)


// appointment

router.post("/appointments", aappoint);
// router.get("/appointments", getAppoint);



// razorpay

router.post("/orderid",orderId)
router.get("/order/:id",fetchOrder)
router.get("/verify/:id",verifyOrder)
export default router