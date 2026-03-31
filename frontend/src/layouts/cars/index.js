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
  const add=await axios.post("https://rentigo-xhqk.onrender.com/user/", form)
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
                                       <div className="flex justify-end">
  <button
    onClick={() => setOpenModal(true)}
    className="bg-white text-black px-3 py-1 rounded-md text-sm font-semibold"
  >
    Add
  </button>
</div>
   

{openModal && (
  <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center">

    {/* Modal */}
    <div className="w-full sm:max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-xl 
                    max-h-[90vh] overflow-y-auto">

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b sticky top-0 bg-white">
        <h2 className="text-lg text-black font-semibold">Add Car</h2>
        <button onClick={() => setOpenModal(false)} className="text-red-500 text-xl">
          &times;
        </button>
      </div>

      {/* Form */}
      <form onSubmit={adds} className="p-4 space-y-4 text-gray-400">

        {/* Name */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 border rounded-md text-sm"
        />

        {/* Model */}
        <input
          type="number"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Model"
          className="w-full p-2 border rounded-md text-sm"
        />

        {/* Description */}
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 border rounded-md text-sm"
        />

        {/* Grid fields */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            value={seat}
            onChange={(e) => setSeat(e.target.value)}
            placeholder="Seat"
            className="p-2 border rounded-md text-sm"
          />

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="p-2 border rounded-md text-sm"
          />
        </div>

        {/* Car Number */}
        <input
          value={car_number}
          onChange={(e) => setCarnumber(e.target.value)}
          placeholder="Car Number"
          className="w-full p-2 border rounded-md text-sm"
        />

        {/* Dropdowns */}
        <div className="grid grid-cols-2 gap-3">
          <select
            value={fuel_type}
            onChange={(e) => setFueltype(e.target.value)}
            className="p-2 border rounded-md text-sm"
          >
            <option value="">Fuel</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>CNG</option>
            <option>Electric</option>
          </select>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="p-2 border rounded-md text-sm"
          >
            <option value="">Type</option>
            <option>XUV</option>
            <option>SUV</option>
            <option>HATCHBACK</option>
            <option>SEDAN</option>
          </select>
        </div>

        {/* File */}
        <input
          type="file"
          onChange={(e) => setThumbnail(e.target.files[0])}
          className="w-full text-sm"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md text-sm"
        >
          Add Car
        </button>

      </form>
    </div>
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
