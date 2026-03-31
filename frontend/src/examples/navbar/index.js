// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FiSearch, FiMenu, FiX, FiUser, FiLogIn } from "react-icons/fi";
// import axios from "axios";
// import Swal from "sweetalert2";

// function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

// useEffect(() => {
//   const handleScroll = () => {
//     setScrolled(window.scrollY > 50);
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);
        
// const [openModal,setOpenModal]=useState(false);
// const [name,setName]=useState("")
// const [bookingDate,setBookingDate]=useState("");
// const [returnDate,setReturnDate]=useState("");
// const [pickUp,setPickUp]=useState("");
// const [dropPoint,setDropPoint]=useState("");
// const [email,setEmail]=useState("");
// const [car,setCarsss]=useState([]);
// const [vendor,setVendors]=useState([]);
// const [status,setStatus]=useState("")
// const [appointment,setAppointment]=useState([]);
// const apps=async(e)=>{
//   e.preventDefault();
//   try{
// const appoint=await axios.post("https://rentigo-xhqk.onrender.com/user/appointments",{
//   name,
//   bookingDate,
//   returnDate,
//   pickUp,
//   dropPoint,
//   email,
//   car,
//   vendor,
//   status
// })
// setAppointment(appoint.data);
// console.log(appoint.data)
// Swal.fire({
//   title:"Success",
//   text:"user taked the appointment",
//   icon:"success"
// })
//   }catch(err){
//     Swal.fire({
//       title:"error!",
//       text:"user not take appointment",
//       icon:"error"
//     })
//     console.log(err);
//   }
// }







// const [vendorss,setVendor]=useState([]);
// const vendorGet=async()=>{
//   try{
// const vendors=await axios.get("https://rentigo-xhqk.onrender.com/getVendor");
// setVendor(vendors.data.data);
// console.log(vendors.data.data);
//   }catch(err){
//     console.log(err);
//   }

// }

// const [carss,setCar]=useState("");
// const cars=async()=>{
//   try{
//     const carss=await axios.get("https://rentigo-xhqk.onrender.com/user/");
//     setCar(carss.data.data);

//   }catch(err){
//     console.log(err);
//   }
// }


// useEffect(()=>{
//   vendorGet();
//   cars();
// },[])
//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-300
//     ${
//       scrolled
//         ? "bg-white/70 backdrop-blur-md shadow-lg text-gray-800"
//         : "bg-blue-600 text-white"
//     }
//   `}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//  <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
//       <div className="bg-blue-600 p-2 rounded-xl 
//       transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-200">
//         <img 
//           src="https://img.freepik.com/premium-vector/car-rental-logo-vector_221979-136.jpg" 
//           alt="Logo" 
//           className="h-8 w-8 object-contain brightness-0 invert rounded" 
//         />
//       </div>
//       <span className={`text-2xl font-black tracking-tighter transition-colors hidden sm:block ${
//         scrolled ? "text-blue-600" : "text-white"
//       }`}>
//         DRIVE<span className={scrolled ? "text-gray-900" : "text-blue-100"}>SELECT</span>
//       </span>
//     </Link>
//           {/* Desktop Search Bar */}
//           <div className="hidden md:flex flex-1 mx-10">
//             <div className="relative left-20 max-w-md w-full">
//               <input
//                 type="text"
//                 placeholder="Search for cars..."
//                 className="w-full pl-4 pr-10 py-2 rounded-full text-gray-800 
//                 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow text-sm"
//               />
//               <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//             </div>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link
//               to="/signup"
//               className="flex items-center gap-1 px-3 py-2 
//               rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-100 transition text-sm"
//             >
//               <FiUser /> Sign Up
//             </Link>
//             <Link
//               to="/signin"
//               className="flex items-center gap-1 px-3 py-2 text-sm rounded-full border border-white hover:bg-white hover:text-blue-600 transition"
//             >
//               <FiLogIn /> Sign In
//             </Link>




// <button className="text-sm cursor-pointer px-3 py-2 rounded-lg hover:border
//  hover:border-white" onClick={()=>setOpenModal(true)}>Get Appointment</button>
//     {
//       openModal &&(
//         <div
//   style={{
//     position: "fixed",
//     inset: 0,
//     zIndex: 50,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "rgba(0,0,0,0.7)",
//     backdropFilter: "blur(4px)",
  
//   }}
// >
//   <form
//     style={{
//       width: "100%",
//       maxWidth: "64rem",
//       backgroundColor: "#fff",
//       borderRadius: "1rem",
//       boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
//       padding: "2rem",
//       position: "relative",
//     }}
//   >
//     <button
//       type="button"
//       onClick={() => setOpenModal(false)}
//       style={{
//         position: "absolute",
//         top: "1rem",
//         right: "1.25rem",
//         fontSize: "2rem",
//         color: "#9ca3af",
//         background: "none",
//         border: "none",
//         cursor: "pointer",
//         color:"red"
//       }}
//     >
//       &times;
//     </button>

//     <h2
//       style={{
//         fontSize: "1.5rem",
//         fontWeight: "700",
//         color: "#1e293b",
//         marginBottom: "1.5rem",
//       }}
//     >
//       Get Appointment
//     </h2>

//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(2, 1fr)",
//         gap: "1.5rem",
//       }}
//     >
         
// <div>
//   <label   style={{
//     display: "block",
//     fontSize: "14px",
//     fontWeight: 600,
//     color: "#374151",
//     marginBottom: "4px",
//   }}>Name</label>
//   <input type="text" placeholder="enter name" style={{
//       width: "100%",
//       padding: "10px 16px",
//       borderRadius: "8px",
//       border: "1px solid #d1d5db",
//       outline: "none",
//     }} value={name}
//     onChange={(e)=>setName(e.target.value)}  className="text-gray-700" required />
// </div>



//        <div>
//         <label style={{
//     display: "block",
//     fontSize: "14px",
//     fontWeight: 600,
//     color: "#374151",
//     marginBottom: "4px",
//   }}>Car</label>
//         <select
        
//           className="text-gray-700"
// style={{
//       width: "100%",
//       padding: "10px 16px",
//       borderRadius: "8px",
//       border: "1px solid #d1d5db",
//       outline: "none",
//     }}  required     value={car} onChange={(e)=>setCarsss(e.target.value)}     >
//       <option>select car</option> 
//       {carss.map((v)=>(  
//       <option    key={v._id} value={v._id}>{v.name}</option>    ))}
//       </select>
//       </div>

//        <div>
//         <label style={{
//     display: "block",
//     fontSize: "14px",
//     fontWeight: 600,
//     color: "#374151",
//     marginBottom: "4px",
//   }}>Vendor</label>
//         <select
          
// style={{
//       width: "100%",
//       padding: "10px 16px",
//       borderRadius: "8px",
//       border: "1px solid #d1d5db",
//       outline: "none",
//       color:"gray"
//     }} required  className="text-gray-700" value={vendor} onChange={(e)=>setVendors(e.target.value)} > 
//     <option>select vendor</option>
//     {vendorss.map((v)=>(
//     <option className="text-gray-800" key={v._id} value={v._id} >{v.name}</option> ))}
//   </select>   
//       </div>

//        <div>
//         <label style={{
//     display: "block",
//     fontSize: "14px",
//     fontWeight: 600,
//     color: "#374151",
//     marginBottom: "4px",
//   }}>email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="enter email"
//             className="text-gray-700"
// style={{
//       width: "100%",
//       padding: "10px 16px",
//       borderRadius: "8px",
//       border: "1px solid #d1d5db",
//       outline: "none",
//     }}        />
//       </div>

//        <div>
//         <label style={{
//     display: "block",
//     fontSize: "14px",
//     fontWeight: 600,
//     color: "#374151",
//     marginBottom: "4px",
//   }} >Booking Date</label>
//         <input
//           type="date"
//           value={bookingDate}
//           onChange={(e) => setBookingDate(e.target.value)}
//           placeholder="enter booking date"
          
// style={{
//       width: "100%",
//       padding: "10px 16px",
//       borderRadius: "8px",
//       border: "1px solid #d1d5db",
//       outline: "none",
//     }}      className="text-gray-700"  />
//       </div>

//         <div>
//           <lable style={{
//     display: "block",
//     fontSize: "14px",
//     fontWeight: 600,
//     color: "#374151",
//     marginBottom: "4px",
//   }}>Return Date</lable>
//   <input
//           type="date"
//           pattern="[A-Z]+"
        
//           value={returnDate}
//           onChange={(e) => setReturnDate(e.target.value)}
//           placeholder="enter return date"  className="text-gray-700"
//  style={{
//       width: "100%",
//       padding: "10px 16px",
//       borderRadius: "8px",
//       border: "1px solid #d1d5db",
//       outline: "none",
//     }}        />
//         </div>




// <div>
//         <label style={{
//     display: "block",
//     fontSize: "14px",
//     fontWeight: 600,
//     color: "#374151",
//     marginBottom: "4px",
//   }} >Pickup Lacation</label>
//         <input
//           type="text"
//           value={pickUp}
//           onChange={(e) => setPickUp(e.target.value)}
//           placeholder="enter booking point"
//             className="text-gray-700"
// style={{
//       width: "100%",
//       padding: "10px 16px",
//       borderRadius: "8px",
//       border: "1px solid #d1d5db",
//       outline: "none",
//     }}        />
//       </div>





//       <div>
//         <label style={{
//     display: "block",
//     fontSize: "10px",
//     fontWeight: 600,
//     color: "#374151",
//     marginBottom: "4px",
//   }} >Drop Point location</label>
//         <input
//           type="text"
//           value={dropPoint}
//           onChange={(e) => setDropPoint(e.target.value)}
//           placeholder="enter drop point "
//            className="text-gray-700"
// style={{
//       width: "100%",
//       padding: "10px 16px",
//       borderRadius: "8px",
//       border: "1px solid #d1d5db",
//       outline: "none",
//     }}        />


// <div >
//   <label  style={{
//     display: "block",
//     fontSize: "10px",
//     fontWeight: 600,
//     color: "#374151",
//     marginBottom: "4px",
//   }} >Status</label>
//   <select style={{
//       width: "100%",
//       padding: "10px 16px",
//       borderRadius: "8px",
//       border: "1px solid #d1d5db",
//       outline: "none",
//       color:"gray"
//     }} required  className="text-gray-700"  value={status} onChange={(e)=>setStatus(e.target.value)}>
//     <option value="">select status</option>
//     <option value="Pending">Pending</option>
//     <option value="Confirmed">Confirmed</option>
//     <option value="Cancelled">Canceled</option>
//   </select>
// </div>




//       </div>
//        {/* <div>
//         <label style={{
//     display: "block",
//     fontSize: "14px",
//     fontWeight: 600,
//     color: "#374151",
//     marginBottom: "4px",
//   }} >Select Fuel</label>
//         <select
//           // value={fuel_type}
//           // onChange={(e) => setFueltype(e.target.value)}
//           required
// style={{
//       width: "100%",
//       padding: "10px 16px",
//       borderRadius: "8px",
//       border: "1px solid #d1d5db",
//       outline: "none",
//     }}        >
//           <option value="">Select Fuel type</option>
//           <option value="Petrol">Petrol</option>
//           <option value="Diesel">Diesel</option>
//           <option value="CNG">CNG</option>
//           <option value="Electric">Electric</option>
//          </select>
//       </div> */}

//        {/* <div>
//         <label style={{
//     display: "block",
//     fontSize: "14px",
//     fontWeight: 600,
//     color: "#374151",
//     marginBottom: "4px",
//   }} >Type</label>
//         <select
//           // value={type}
//           // onChange={(e) => setType(e.target.value)}
//           required
// style={{
//       width: "100%",
//       padding: "10px 16px",
//       borderRadius: "8px",
//       border: "1px solid #d1d5db",
//       outline: "none",
//     }}        >
//           <option value="">Select Type</option>
//           <option value="XUV">XUV</option>
//           <option value="SUV">SUV</option>
//           <option value="HATCHBACK">HATCHBACK</option>
//           <option value="SEDAN"> SEDAN</option>
//         </select>
//       </div> */}

        
//     </div>

//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         marginTop: "2rem",
//       }}
//     >
//       <button
//         type="submit"
//         onClick={apps}
//         className="bg-blue-500  rounded-lg cursor-pointer hover:bg-blue-600 px-3 py-2  "

//       >
//        Appointment
//       </button>
//     </div>
//   </form>
// </div>
//       )
//     }
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="focus:outline-none"
//             >
//               {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden bg-blue-600 px-4 pb-4">
//           {/* Search */}
//           <div className="relative mb-4">
//             <input
//               type="text"
//               placeholder="Search for cars..."
//               className="w-full pl-4 pr-10 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
//             />
//             <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           </div>

//           {/* Links */}
//           <div className="flex flex-col gap-3">
//             <Link
//               to="/signup"
//               className="flex items-center gap-1 px-3 py-2 rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-100 transition"
//               onClick={() => setMobileOpen(false)}
//             >
//               <FiUser /> Sign Up
//             </Link>
//             <Link
//               to="/signin"
//               className="flex items-center gap-1 px-3 py-2 rounded-full
//                border border-white hover:bg-white hover:text-blue-600 transition"
//               onClick={() => setMobileOpen(false)}
//             >
//               <FiLogIn /> Sign In
//             </Link>
//           </div>
//           <button>Get Appointment</button>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;







import React, { useEffect, useState } from "react";
// import  Link  from "react-router-dom";
import { FiSearch, FiMenu, FiX, FiUser, FiLogIn, FiCalendar, FiMapPin, FiMail } from "react-icons/fi";
import axios from "axios";
import Swal from "sweetalert2";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaCar } from "react-icons/fa";
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // Form States
  const [name, setName] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropPoint, setDropPoint] = useState("");
  const [email, setEmail] = useState("");
  const [carId, setCarId] = useState("");
  const [vendorId, setVendorId] = useState("");
  const [status, setStatus] = useState("Pending");

  const [vendorsList, setVendorsList] = useState([]);
  const [carsList, setCarsList] = useState([]);
  const [search,setSearch]=useState("");
  
 
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [vRes, cRes] = await Promise.all([
          axios.get("https://rentigo-xhqk.onrender.com/getvendor"),
          axios.get("https://rentigo-xhqk.onrender.com/user/")
        ]);
        setVendorsList(vRes.data.data);
        setCarsList(cRes.data.data);
        // setQuery(cRes.data.data)
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchData();
  }, []);
  

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://rentigo-xhqk.onrender.com/user/appointments", {
        name, bookingDate, returnDate, pickUp, dropPoint, email, car: carId, vendor: vendorId, status
      });
      setOpenModal(false);
      Swal.fire({ title: "Success", text: "Appointment booked successfully!", icon: "success", confirmButtonColor: "#2563eb" });
    } catch (err) {
      Swal.fire({ title: "Error!", text: "Could not book appointment.", icon: "error" });
    }
  };
let carFilter= carsList.filter((v)=>v.name.toLowerCase().includes(search))
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? "bg-white/80 backdrop-blur-lg shadow-xl py-2" : "bg-blue-600 py-4 text-white"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-xl transition-all ${scrolled ? "bg-blue-600 " : "bg-white"}`}>
              {/* <img src="https://img.freepik.com/premium-vector/car-rental-logo-vector_221979-136.jpg" 
                   className={`h-6 w-6 object-contain ${scrolled ? "brightness-0 invert" : ""}`} alt="Logo" /> */}
         
                       <FaCar className={`${scrolled?"text-white":"text-blue-600"}`} />
         
            </div>
            <span className={`text-xl font-black tracking-tighter ${scrolled ? "text-slate-900" : "text-white"}`}>
            REN<span className="text-blue-400">TIGO</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <input type="text" placeholder="Search luxury cars..." 
            value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())}
                className={`pl-10 pr-4 py-2 rounded-full text-sm transition-all outline-none border ${
                  scrolled ? "bg-slate-100 border-transparent focus:bg-white focus:border-blue-500 w-64" : "bg-white/20 border-white/30 text-white placeholder-blue-100 w-48 focus:w-64"
                }`} />
              <FiSearch className={`absolute left-3 top-1/2 -translate-y-1/2 ${scrolled ? "text-slate-400" : "text-white"}`} />
            </div>
            
            
            


            <div className="flex items-center gap-3">
              <button onClick={() => setOpenModal(true)} className={`text-sm font-bold px-5 py-2.5 rounded-xl transition-all border ${
                scrolled ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" : "border-white/40 text-white hover:bg-white hover:text-blue-600"
              }`}>
                Book Appointment
              </button>
              <Link to="/signin" className={`p-2.5 rounded-xl transition-all ${scrolled ? "bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white" : "bg-white/10 hover:bg-white hover:text-blue-600"}`}>
                <FiUser size={20} />
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>



{mobileOpen && (
  <div className="md:hidden bg-blue-600 text-white px-4 py-4 space-y-4">

    {/* 🔍 Search */}
    <div className="relative">
      <input
        type="text"
        placeholder="Search cars..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        className="w-full pl-10 pr-4 py-2 rounded-full text-gray-800 outline-none"
      />
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
    </div>

    
    <button
      onClick={() => {
        setOpenModal(true);
        setMobileOpen(false);
      }}
      className="w-full bg-white text-blue-600 font-semibold py-2 rounded-xl shadow"
    >
      Book Appointment
    </button>

    {/* 👤 Account */}
    <Link
      to="/signin"
      onClick={() => setMobileOpen(false)}
      className="flex items-center justify-center gap-2 w-full border border-white py-2 rounded-xl"
    >
      <FiUser size={18} />
      Account
    </Link>

  </div>
)}





       { search&&
        
      (  <div className="absolute bg-white top-16 left-1/2 rounded-md ">
      
       { carFilter.length>0? 

          ( carFilter.map((v)=>(
              <div key={v._id} className="bg-white  text-black hover:bg-blue-50 rounded-md
              cursor-pointer px-56"><Link to={`/cardetails/${v._id}`}>{v.name}</Link> </div>
            ))):(
        <div className="px-4 py-2 text-sm  text-center text-black">
          No cars found
        </div>)}
        </div>
      )}   

       {openModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setOpenModal(false)} />
          
          <div className="relative bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="grid md:grid-cols-5 h-full">
              {/* Modal Sidebar */}
              <div className="hidden md:block col-span-2 bg-blue-600 p-10 text-white">
                <h3 className="text-3xl font-black mb-4 leading-tight">Fast-Track Your Rental</h3>
                <p className="text-blue-100 mb-8">Fill in your details and our team will prepare your car for a seamless pickup experience.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-medium"><FiCalendar /> 24/7 Availability</div>
                  <div className="flex items-center gap-3 text-sm font-medium"><FiMapPin /> Multiple Locations</div>
                </div>
              </div>

              {/* Form Content */}
              <div className="col-span-3 p-8 md:p-12 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-black text-slate-900">Appointment</h2>
                  <button onClick={() => setOpenModal(false)} className="text-slate-400 hover:text-red-500 transition-colors"><FiX size={24} /></button>
                </div>

                <form onSubmit={handleAppointment} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label className="text-xs font-bold text-slate-500 uppercase ml-1">Full Name</label>
                      <input type="text" required value={name} onChange={(e)=>setName(e.target.value)}
                       className="w-full mt-1 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl 
                       focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 transition-all" placeholder="John Doe" />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase ml-1">Select Car</label>
                      <select required value={carId} onChange={(e)=>setCarId(e.target.value)} className="w-full 
                      mt-1 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500
                      text-gray-800 outline-none transition-all">
                        <option value="">Select Car</option>
                        {carsList.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase ml-1">Vendor</label>
                      <select required value={vendorId} onChange={(e)=>setVendorId(e.target.value)} 
                      className="w-full mt-1 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2
                      text-gray-800 focus:ring-blue-500 outline-none transition-all">
                        <option value="">Select Vendor</option>
                        {vendorsList.map(v => <option key={v._id} value={v._id}>{v.name}</option>)}
                      </select>
                    </div>

                    <div className="col-span-2">
                      <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address</label>
                      <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}
                       className="w-full mt-1 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2
                       text-gray-800 focus:ring-blue-500 outline-none transition-all" placeholder="john@example.com" />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase ml-1">Booking Date</label>
                      <input type="date" required value={bookingDate} onChange={(e)=>setBookingDate(e.target.value)} 
                      className="w-full text-gray-800 mt-1 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase ml-1">Return Date</label>
                      <input type="date" required value={returnDate} onChange={(e)=>setReturnDate(e.target.value)} 
                      className="w-full mt-1 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2
                      text-gray-800 focus:ring-blue-500 outline-none transition-all" />
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-200 active:scale-95">
                    Confirm Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>





      )}
    </nav>



  );
}
 


export default Navbar;

//  