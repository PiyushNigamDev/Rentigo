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
const gettss=  await   axios.get(`http://localhost:5000/user/`);
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
const register=await axios.post("http://localhost:5000/user/createVendor",{
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
                <MDTypography variant="h6" color="white">
                   Vendor <button style={{bgColor:"white",
                                          position:"relative",left:"1000px",
                                          padding:"2px",
                                          paddingInline:"10px",
                                          borderRadius:"5px",
                                          fontWeight:"bold",
                                          border:"none",
                                          cursor:"pointer"
                                        }}  onClick={()=>{
                                        setOpenModal(true),
                                        setName(""),
                                        setBookingDate(""),
                                        setReturnDate(""),
                                        setStatus(""),
                                        setMobile(""),
                                        setCarBooked("")
                                        }}>Add</button>
                </MDTypography>
                 


 {openModal && (
 
 <div
  style={{
    position: "fixed",
    inset: 0,
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    backdropFilter: "blur(4px)",
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
      onClick={() => setOpenModal(false)}
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
      Add New Post
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
  }} >Car Booked</label>
        <select
           value={carBooked}
          onChange={(e) => setCarBooked(e.target.value)}
          // placeholder="enter price"
          required
style={{
      width: "100%",
      padding: "10px 16px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      outline: "none",
    }}        >
  <option value="">select the car </option>
{carBooked1.map((v)=>(
  <option key={v._id} value={v._id} >{v.name}</option>
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
        onClick={VendorRegister}
        style={{
          backgroundColor: "#4f46e5",
          color: "#fff",
          padding: "0.5rem 2rem",
          borderRadius: "0.5rem",
          border: "none",
          fontWeight: "600",
          cursor: "pointer",
        }}
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
