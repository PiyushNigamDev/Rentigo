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
  const gett=await axios.get("http://localhost:5000/getvendor");
  
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



const getCars=async()=>{
  try{
const gettss=await axios.get("http://localhost:5000/user");
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
    const update=await axios.put(`http://localhost:5000/user/updateVendor/${id}`,{
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
  const Delete=await axios.delete(`http://localhost:5000/user/delete/${id}`);
  setDel(Delete);
  console.log(Delete);
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
    setEditModal(true),
    setName(v.name),
    setMobile(v.mobile),
    setBookingDate(v.bookingDate),
    setReturnDate(v.returnDate),
setCarBooked(v.carBooked?._id || ""),
    setStatus(v.status)
    // setVendorEdit(v._id)
  }}
>
<FaEdit />
 </button>

         {editModal&&(
          <div
  style={{
    position: "fixed",
    inset: 0,
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    backdropFilter: "blur(3px)",
  }}
>
  <form
    style={{
      width: "50%",
      maxWidth: "64rem",
      backgroundColor: "#fff",
      borderRadius: "1rem",
      boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
      padding: "2rem",
      position: "relative",
    }}
  >
    <button
      type="button"
      onClick={() => setEditModal(false)}
      style={{
        position: "absolute",
        top: "1rem",
        right: "1.25rem",
        fontSize: "2rem",
        color: "#9ca3af",
        background: "none",
        border: "none",
        cursor: "pointer",
        color:"red"
      }}
    >
      &times;
    </button>

    <h2
      style={{
        fontSize: "1.5rem",
        fontWeight: "700",
        color: "#1e293b",
        marginBottom: "1.5rem",
      }}
    >
    Update Vendor
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
      }}
    >
        <div>
        <label style={{
    display: "block",
    fontSize: "14px",
    fontWeight: 600,
    color: "#374151",
    marginBottom: "4px",
  }} >Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
 style={{
      width: "100%",
      padding: "10px 16px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      outline: "none",
    }}        />
      </div>

       <div>
        <label style={{
    display: "block",
    fontSize: "14px",
    fontWeight: 600,
    color: "#374151",
    marginBottom: "4px",
  }}>Mobile</label>
        <input
          type="number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter mobile"
          required
style={{
      width: "100%",
      padding: "10px 16px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      outline: "none",
    }}            />
      </div>

       <div>
        <label style={{
    display: "block",
    fontSize: "14px",
    fontWeight: 600,
    color: "#374151",
    marginBottom: "4px",
  }}>Booking date</label>
        <input
          type="date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          placeholder=" enter booking date"
          required
style={{
      width: "100%",
      padding: "10px 16px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      outline: "none",
    }}        />
      </div>
      
      
           <div>
        <label style={{
    display: "block",
    fontSize: "14px",
    fontWeight: 600,
    color: "#374151",
    marginBottom: "4px",
  }}>Return Date</label>
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          placeholder="enter return date"
          required
style={{
      width: "100%",
      padding: "10px 16px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      outline: "none",
    }}        />
      </div>

       

       <div>
        <label style={{
    display: "block",
    fontSize: "14px",
    fontWeight: 600,
    color: "#374151",
    marginBottom: "4px",
  }}>Car Booked</label>
        <select
          type="text"
          value={carBooked}
          onChange={(e) => setCarBooked(e.target.value)}
          placeholder=" enter booking date"
          required
style={{
      width: "100%",
      padding: "10px 16px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      outline: "none",
    }}        > 
    <option value="">select the car</option>
      {carBookedId.map((v)=>(
<option key={v._id} value={v._id}>{v.name}</option>
      ))}
    </select>
      </div>

        <div>
          <lable style={{
    display: "block",
    fontSize: "14px",
    fontWeight: 600,
    color: "#374151",
    marginBottom: "4px",
  }}>Status</lable>
  
  <select
           value={status}
          onChange={(e) => setStatus(e.target.value)}
        
          required
style={{
      width: "100%",
      padding: "10px 16px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      outline: "none",
    }}        >
      <option value="">select status</option>
      <option value="Pending">Pending</option>
      <option value="Confirmed">Confirmed</option>
      <option value="Canceled">Canceled</option>
      {/* <option>select status</option> */}
    </select>
        </div>

       

       

        
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <button
        type="submit"
        onClick={(e)=>{e.preventDefault();
          updateVendor(v._id)}}
        style={{
          backgroundColor: "#4f46e5",
          color: "#fff",
          padding: "0.5rem 2rem",
          borderRadius: "0.5rem",
          border: "none",
          fontWeight: "600",
          cursor: "pointer",
        }}>
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
