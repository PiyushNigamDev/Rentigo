/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { FaEdit, FaTrash } from "react-icons/fa";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Delete } from "@mui/icons-material";
export default function data() {
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

const [getData,setGetData]=useState([]);
  const gets=async()=>{
    try{
    const get=await axios.get("http://localhost:5000/user/");
    setGetData(get.data.data);
    console.log(get.data.data)
  }catch(err){
    console.log(err.message);
    alert(err.message);
  }
  }
  useEffect(()=>{
gets()
  },[]);

const [name,setName]=useState("");
const [model,setModel]=useState("");
const [description,setDescription]=useState("");
const [fuel_type,setFueltype]=useState("");
const [type,setType]=useState("");
const [seat,setSeat]=useState("");
const [price,setPrice]=useState("");
const [car_number,setCarnumber]=useState("");
const [thumbnail,setThumbnail]=useState(null);
const [updated,setUpdated]=useState({});
const [value,setValue]=useState(null);
const [editModal,setEditModal]=useState(false);
  const updates=async(id)=>{
     
    try{

      const formData=new FormData();
    formData.append("name",name);
    formData.append("model",model);
    formData.append("description",description);
    formData.append("fuel_type",fuel_type);
    formData.append("type",type);
    formData.append("seat",seat);
    formData.append("price",price);
    formData.append("car_number",car_number);
    formData.append("thumbnail",thumbnail);
const update=await axios.put(`http://localhost:5000/user/${id}`, formData);
console.log(update.data);
setUpdated(update.data);
Swal.fire({
  title:"Success",
  text:"successfully updated the Car data",
  icon:"success"
})
 
     }catch(err){
      console.log(err.message);
      Swal.fire({
        title:"Error!",
        text:"not updated the data",
icon:"error"
      })
    }
  }


const [deletedd,setDeleted]=useState({});
  const deletes= async(id)=>{
    try{
const Deleted=await axios.delete(`http://localhost:5000/user/${id}`);
setDeleted(Deleted.data);
 
     }catch(err){
      console.log(err.message)
    }
  }
//   const [search,setSearch]=useState("");

// const searched=getData.filter((car)=>car.name.toLowerCase().includes("verna"));
// console.log(searched);

  return {
    columns: [
      { Header: "name", accessor: "name", width: "22%", align: "left" },
      { Header: "fuel_type", accessor: "fuel_type", align: "left" },
      { Header: "type", accessor: "type", align: "center" },
      { Header: "model", accessor: "model", align: "center" },
      { Header: "car_number", accessor: "car_number", align: "center" },
      { Header: "price", accessor: "price", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: getData.map((v)=>({
        name:v.name,
        fuel_type:v.fuel_type,
        type:v.type,
        model:v.model,
        car_number:v.car_number,
        price:v.price ,
        action:<span >
          <button style={{padding:"5px",paddingInline:"10px",
        backgroundColor:"#48abfb",borderRadius:"7px",border:"none",cursor:"pointer",color:"white"}}
        onClick={()=>{setEditModal(true),
          
setName(v.name),
setCarnumber(v.car_number),
setDescription(v.description),
setFueltype(v.fuel_type),
setModel(v.model),
setType(v.type),
setSeat(v.seat),
setPrice(v.price),
setThumbnail(v.thumbnail)
}}><FaEdit />
 </button>
        {editModal &&(

<div
  style={{
    position: "fixed",
    inset: 0,
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    backdropFilter: "blur(1px)",
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
  }}>Model</label>
        <input
          type="number"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Enter model"
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
  }}>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder=" enter short descritption"
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
  }}>Seat</label>
        <input
          type="number"
          value={seat}
          onChange={(e) => setSeat(e.target.value)}
          placeholder="enter seat"
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
  }} >Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="enter price"
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
          <lable style={{
    display: "block",
    fontSize: "14px",
    fontWeight: 600,
    color: "#374151",
    marginBottom: "4px",
  }}>Car Number</lable>
  <input
          type="text"
          pattern="[A-Z]+"
        
          value={car_number}
          onChange={(e) => setCarnumber(e.target.value)}
          placeholder="enter car number"
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
  }} >Select Fuel</label>
        <select
          value={fuel_type}
          onChange={(e) => setFueltype(e.target.value)}
          required
style={{
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
style={{
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
    color: "#374151",
    marginBottom: "4px",
  }} >Thumbnail</label>
        <input
          type="file"
          onChange={(e) => setThumbnail(e.target.files[0])}
          required
style={{
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
        onClick={(e)=>{
          e.preventDefault();
          updates(v._id)}}
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
         <button style={{padding:"5px",paddingInline:"7px",marginLeft:"2px",borderRadius:"7px",
         border:"none",cursor:"pointer",backgroundColor:"#fd3f2e" ,color:"white"

         }} 
        onClick={()=>deletes(v._id)}><FaTrash />
</button></span>
      }))
    }
  };
 
