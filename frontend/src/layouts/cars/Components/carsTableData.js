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
    const get=await axios.get("https://rentigo-xhqk.onrender.com/user/");
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
const [selectedId, setSelectedId] = useState(null);
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
const update=await axios.put(`https://rentigo-xhqk.onrender.com/user/${id}`, formData);
console.log(update.data);
setUpdated(update.data);
Swal.fire({
  title:"Success",
  text:"successfully updated the Car data",
  icon:"success"
})
 gets()
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
const Deleted=await axios.delete(`https://rentigo-xhqk.onrender.com/user/${id}`);
setDeleted(Deleted.data);
 gets();
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
       onClick={() => {
  setEditModal(true);
  setSelectedId(v._id);   

  setName(v.name);
  setCarnumber(v.car_number);
  setDescription(v.description);
  setFueltype(v.fuel_type);
  setModel(v.model);
  setType(v.type);
  setSeat(v.seat);
  setPrice(v.price);
  setThumbnail(v.thumbnail);
}}><FaEdit />
 </button>
    {editModal && (
  <div className="fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center px-2">

    {/* Modal */}
    <div className="w-full sm:max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-xl 
                    max-h-[90vh] overflow-y-auto">

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b sticky top-0 bg-white">
        <h2 className="text-lg font-semibold">Update Car</h2>
        <button
  onClick={() => {
    console.log("close clicked");
    setEditModal(false);
  }}
  className="text-xl text-red-500 cursor-pointer font-bold"
>
  &times;
</button>
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updates(selectedId);
        }}
        className="p-4 space-y-4"
      >

        {/* Name */}
        <div>
          <label className="text-xs text-gray-600">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Model */}
        <div>
          <label className="text-xs text-gray-600">Model</label>
          <input
            type="number"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-xs text-gray-600">Description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

          <div>
            <label className="text-xs text-gray-600">Seat</label>
            <input
              type="number"
              value={seat}
              onChange={(e) => setSeat(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md text-sm"
            />
          </div>

          <div>
            <label className="text-xs text-gray-600">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md text-sm"
            />
          </div>

        </div>

        {/* Car Number */}
        <div>
          <label className="text-xs text-gray-600">Car Number</label>
          <input
            value={car_number}
            onChange={(e) => setCarnumber(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md text-sm"
          />
        </div>

        {/* Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <select
            value={fuel_type}
            onChange={(e) => setFueltype(e.target.value)}
            className="p-2 border rounded-md text-sm"
          >
            <option value="">Select Fuel</option>
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
            <option value="">Select Type</option>
            <option>SUV</option>
            <option>SEDAN</option>
            <option>XUV</option>
            <option>HATCHBACK</option>
          </select>
        </div>

        {/* File */}
        <div>
          <label className="text-xs text-gray-600">Thumbnail</label>
          <input
            type="file"
            onChange={(e) => setThumbnail(e.target.files[0])}
            className="w-full mt-1 text-sm"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition"
        >
          Update Car
        </button>

      </form>
    </div>
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
 
