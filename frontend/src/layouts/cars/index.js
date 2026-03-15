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
import DataTable from "./DataTable";
import carRenatlTable from "./Components/carsTableData";
import { useState } from "react";
 import axios from "axios";
 import Swal from "sweetalert2";
import { Form } from "react-router-dom";
function Cars() {
  const { columns, rows } = carRenatlTable();
const [name,setName]=useState("");
const [model,setModel]=useState("");
const [description,setDescription]=useState("");
const [fuel_type,setFueltype]=useState("");
const [type,setType]=useState("");
const [seat,setSeat]=useState("");
const [price,setPrice]=useState("");
const [car_number,setCarnumber]=useState("");
const [openModal,setOpenModal]=useState(false);
const [thumbnail,setThumbnail]=useState(null)
const [send,setSend]=useState({});
const adds=async(e)=>{
  e.preventDefault();
  try{
    const form=new FormData();
    form.append("name",name);
    form.append("description",description);
    form.append("fuel_type",fuel_type);
    form.append("type",type);
    form.append("car_number",car_number);
    form.append("seat",seat);
    form.append("price",price);
    form.append("model",model);
    form.append("thumbnail",thumbnail);
  const add=await axios.post("http://localhost:5000/user/", form)
  setSend(add.data);
  setName("");
  setModel("");
  setDescription("");
  setCarnumber("");
  setFueltype("");
  setPrice("");
  setSeat("");
  setType("");
  setThumbnail("");
  Swal.fire({
    title:"Success",
    text:"successfully created car data",
    icon:"success"
  })
}catch(err){
  console.log(err.message);
 Swal.fire({
    title:"Error!",
  text:"car data not added",
    icon:"error"
  })}
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
                py={1}
                px={1}
                variant="gradient"
                bgColor="warning"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Cars List
                                        <button style={{bgColor:"white",
                                          position:"relative",left:"1000px",
                                          padding:"2px",
                                          paddingInline:"10px",
                                          borderRadius:"5px",
                                          fontWeight:"bold",
                                          border:"none",
                                          cursor:"pointer"
                                        }} onClick={()=>{
                                          setOpenModal(true)
                                        }}>Add</button>
   

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
  color:"#374151",
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
  }}>Model</label>
        <input
          type="number"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Enter model"
          required
style={{
  color:"#374151",
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
  }}>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder=" enter short descritption"
          required
style={{
  color:"#374151",
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
  }}>Seat</label>
        <input
          type="number"
          value={seat}
          onChange={(e) => setSeat(e.target.value)}
          placeholder="enter seat"
          required
style={{
  color:"#374151",
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
  }} >Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="enter price"
          required
style={{
  color:"#374151",
      width: "100%",
      padding: "10px 16px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      outline: "none",
    }}        />
      </div>

        <div>
          <lable style={{
    display: "block",
    fontSize: "14px",
    fontWeight: 600,
    color: "#374151",
    marginBottom: "4px",
  }}>Car Number</lable>
  <input
          type="text"
          value={car_number}
          onChange={(e) => setCarnumber(e.target.value)}
          placeholder="enter car number"
          required
style={{
  color:"#374151",
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
  }} >Select Fuel</label>
        <select
          value={fuel_type}
          onChange={(e) => setFueltype(e.target.value)}
          required
style={{
  color:"#374151",
      width: "100%",
      padding: "10px 16px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      outline: "none",
    }}        >
          <option value="">Select Fuel type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="CNG">CNG</option>
          <option value="Electric">Electric</option>
         </select>
      </div>

       <div>
        <label style={{
    display: "block",
    fontSize: "14px",
    fontWeight: 600,
    color: "#374151",
    marginBottom: "4px",
  }} >Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
style={{color:"#374151",
      width: "100%",
      padding: "10px 16px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      outline: "none",
    }}        >
          <option value="">Select Type</option>
          <option value="XUV">XUV</option>
          <option value="SUV">SUV</option>
          <option value="HATCHBACK">HATCHBACK</option>
          <option value="SEDAN"> SEDAN</option>
        </select>
      </div>

       <div style={{ gridColumn: "1 / -1" }}>
        <label style={{
    display: "block",
    fontSize: "14px",
    fontWeight: 600,
    color: "black",
    marginBottom: "4px",
  }} >Thumbnail</label>
        <input
          type="file"
          onChange={(e) => setThumbnail(e.target.files[0])}
          required
style={{
  color:"#374151",
      width: "100%",
      padding: "10px 16px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      outline: "none",
    }}        />
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
        onClick={adds}
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
        Add Post
      </button>
    </div>
  </form>
</div>

 
 )}


                </MDTypography>
 
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
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}




 

export default Cars;
