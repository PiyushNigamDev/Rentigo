/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { actions } from "react-table";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";

// import Link from "react-router-dom"

export default function data() {
 
const [getData,setGetData]=useState([]);
// const [openModal,setModal]=useState(false);
const VendorGet=async()=>{
   try{
  const gett=await axios.get("https://rentigo-xhqk.onrender.com/getvendor");
  
setGetData(gett.data.data)
console.log(gett.data.data)
  }catch(err){
    console.log(err)
  }
}

useEffect(()=>{
VendorGet();
 
},[])

const [editModal,setEditModal]=useState(false)
const [name,setName]=useState("");
const [mobile,setMobile]=useState("");
const [bookingDate,setBookingDate]=useState("");
const [returnDate,setReturnDate]=useState("");
const [carBooked,setCarBooked]=useState("");
const [carBookedId,setCarBookedId]=useState([]);
// const [vendorId,setVendorEdit]=useState(null);
const [status,setStatus]=useState("Pending");
const [updates,setUpdate]=useState("");
const [selectedId, setSelectedId] = useState(null);


const getCars=async()=>{
  try{
const gettss=await axios.get("https://rentigo-xhqk.onrender.com/user");
setCarBookedId(gettss.data.data);
console.log("get in update",gettss.data.data);
  }catch(err){
    console.log(err);
  }
}


 useEffect(()=>{
getCars();
 },[])




const updateVendor=async(id)=>{
  try{
    const update=await axios.put(`https://rentigo-xhqk.onrender.com/user/updateVendor/${id}`,{
      name,
      mobile,
      bookingDate,
      returnDate,
      carBooked,
      status
    })
setUpdate(update);
console.log(name);
Swal.fire({
  title:"Success",
  text:"Vendor successfullly updated",
  icon:"success"
})
VendorGet();
  }catch(err){
    console.log(err)
    Swal.fire({
  title:"Error!",
  text:"Vendor not updated",
  icon:"error"
})
  }
}


const [del,setDel]=useState({});
const Deleted=async(id)=>{
  try{
  const Delete=await axios.delete(`https://rentigo-xhqk.onrender.com/user/delete/${id}`);
  setDel(Delete);
  console.log(Delete);
  VendorGet();
  }catch(err){
    console.log(err)
  }
}

// useEffect(()=>{
// Deleted()
// },[])

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "name", accessor: "name", width: "25%", align: "left" },
      { Header: "mobile", accessor: "mobile", align: "left" },
      { Header: "status", accessor: "status", align: "center" },

      { Header: "bookingDate", accessor: "bookingDate", align: "center" },
      { Header: "returnDate", accessor: "returnDate", align: "center" },
      { Header: "carBooked", accessor: "carBooked", align: "center" },

      { Header: "action", accessor: "action", align: "center" },
    ],

    rows:getData.map((v)=>({
      name:v.name,
      mobile:v.mobile,
      status:v.status,
      bookingDate:v.bookingDate,
      returnDate:v.returnDate,
      carBooked:v.carBooked?(<Link to={`/cars`}>{v.carBooked.name}</Link>):"No car",

      action:(<span>
       <button
  style={{
    padding: "5px",
    paddingInline: "7px",
    borderRadius: "7px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#2e88fd",
    color:"white"
  }}
  onClick={() => {
  setEditModal(true);
  setSelectedId(v._id);   

  setName(v.name);
  setMobile(v.mobile);
  setBookingDate(v.bookingDate);
  setReturnDate(v.returnDate);
  setCarBooked(v.carBooked?._id || "");
  setStatus(v.status);
}}
>
<FaEdit />
 </button>

        {editModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm px-4">
    
    {/* Modal Box */}
    <form className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 md:p-10 relative max-h-[90vh] overflow-y-auto">
      
      {/* Close Button */}
      <button
        type="button"
        onClick={() => setEditModal(false)}
        className="absolute top-4 right-5 text-2xl text-red-500 hover:scale-110 transition"
      >
        &times;
      </button>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Update Vendor
      </h2>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Mobile
          </label>
          <input
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter mobile"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Booking Date */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Booking Date
          </label>
          <input
            type="date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Return Date */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Return Date
          </label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Car */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Car Booked
          </label>
          <select
            value={carBooked}
            onChange={(e) => setCarBooked(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Car</option>
            {carBookedId.map((v) => (
              <option key={v._id} value={v._id}>
                {v.name}
              </option>
            ))}
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Canceled">Canceled</option>
          </select>
        </div>

      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
updateVendor(selectedId);
         }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition active:scale-95"
        >
          Update Vendor
        </button>
      </div>

    </form>
  </div>
)}
         
         
         
          <button style={{padding:"5px",paddingInline:"2px",borderRadius:"7px",
         border:"none",cursor:"pointer",backgroundColor:"red",color:"white",marginLeft:"2px"
}} 
onClick={(e)=>{
  e.preventDefault()
Deleted(v._id)
}}><FaTrash />
</button></span>)


 

 
         
    })) 
      
        
         
  };
}
