/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();


const [name,setName]=useState("");
const [mobile,setMobile]=useState("");
const [bookingDate,setBookingDate]=useState("");
const [returnDate,setReturnDate]=useState("");
const [carBooked,setCarBooked]=useState("");
const [carBooked1,setCarBooked1]=useState([]);

const [status,setStatus]=useState("Pending");
const [registers,setRegister]=useState({});
const [openModal,setOpenModal]=useState(false);

const getCars11=async()=>{
  try{
const gettss=  await   axios.get(`https://rentigo-xhqk.onrender.com/user/`);
setCarBooked1(gettss.data.data);
console.log("get the car",gettss.data.data);
  }catch(err){
    console.log(err)
  }
}
useEffect(()=>{
getCars11()
},[])

const VendorRegister=async(e)=>{
  e.preventDefault();
  try{
const register=await axios.post("https://rentigo-xhqk.onrender.com/user/createVendor",{
  name,
  mobile,
  bookingDate,
  returnDate,
  status,
  carBooked
});
setRegister(register.data)
// console.log(register.data)
Swal.fire({
  title:"Success",
  text:"Vendor successfully registered",
  icon:"success"
})
getCars11();
   }catch(err){
    console.log(err)
    // alert(err.message);
    Swal.fire({
  title:"Error!",
  text:"Vendor not registered",
  icon:"error"
})
  }
}



  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                
    
                  <div style={{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap"
}}>
  <MDTypography variant="h6" color="white">
    Vendor
  </MDTypography>

  <button
    onClick={() => {
      setOpenModal(true);
      setName("");
      setBookingDate("");
      setReturnDate("");
      setStatus("");
      setMobile("");
      setCarBooked("");
    }}
    style={{
      backgroundColor: "white",
      color: "#1976d2",
      padding: "6px 14px",
      borderRadius: "6px",
      fontWeight: "bold",
      border: "none",
      cursor: "pointer",
      marginTop: "6px"
    }}
  >
    Add
  </button>
</div>
            
                 


 {openModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
    
    {/* Modal Box */}
    <form className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 md:p-10 relative max-h-[90vh] overflow-y-auto">
      
      {/* Close Button */}
      <button
        type="button"
        onClick={() => setOpenModal(false)}
        className="absolute top-4 right-5 text-2xl text-red-500 hover:scale-110 transition"
      >
        &times;
      </button>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Add New Vendor
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
            {carBooked1.map((v) => (
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
          onClick={VendorRegister}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition active:scale-95"
        >
          Add Vendor
        </button>
      </div>

    </form>
  </div>
)}


              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
