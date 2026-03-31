
// import { Container } from "@mui/material";
// import Navbar from "examples/navbar/index.js";
// import { useRef } from "react";
// const Home=()=>{

//   const sliderRef = useRef(null);

//   const scrollLeft = () => {
//     sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
//   };


//   const carSlider=[{
//     wheel1:{
//         image:"https://imgcdn.oto.com.sg/large/gallery/color/1/14/toyota-fortuner-color-455528.jpg"
//     },
//     wheel2:{
//         image:"https://www.evoindia.com/evoindia/2024-08-16/fwnmw008/Roxx-1.jpg"
//     },
//     wheel3:{
//         image:"https://www.evoindia.com/evoindia/2024-08-16/fwnmw008/Roxx-1.jpg"
//     },
//     wheel4:{
//         image:"https://images.overdrive.in/wp-content/uploads/2023/06/Untitled-design-2023-06-21T150753.280.png"
//     },
//   }]

// const images = Object.values(carSlider[0]).map(wheel => wheel.image);


// const list=[{
//     car1:{
// image:"https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/11/2025-toyota-camry.jpg",
// name:"Camry",
// model:"2025",
// seat:"4",
// type:"Sedan",
// fuelType:"Petrol",
// price:"50",
// carNumber: "UP32MN0001"
//     },
// car2: {
//       image: "https://www.toyota.com/imgix/responsive/images/gallery/photos-videos/2022/corolla/2022-corolla-LE-001.jpg",
//       name: "Corolla",
//       carNumber: "XYZ789",
//       type: "Sedan",
//       fuelType: "Petrol",
//       seat: 5,
//       price: 45,
//     },
// car3: {
//       image: "https://www.toyota.com/imgix/responsive/images/gallery/photos-videos/2022/rav4/2022-rav4-LE-001.jpg",
//       name: "RAV4",
//       carNumber: "LMN456",
//       type: "SUV",
//       fuelType: "Diesel",
//       seat: 7,
//       price: 70,
//     },}
// ]

//     return(
//         <>
//         <Navbar/>


//         <div style={{ position: "relative" }}>
//           {/* Left Arrow */}
//           <button
//             onClick={scrollLeft}
//             style={{
//               position: "absolute",
//               left: 0,
//               top: "50%",
//               transform: "translateY(-50%)",
//               zIndex: 1,
//               backgroundColor: "#1976d2",
//               color: "#fff",
//               border: "none",
//               borderRadius: "50%",
//               width: "35px",
//               height: "35px",
//               cursor: "pointer",
//             }}
//           >
//             {"<"}
//           </button>

//           {/* Image Slider */}
//           <ul
//             ref={sliderRef}
//             style={{
//               display: "flex",
//               overflowX: "auto",
//               gap: "20px",
//               padding: "10px 50px",
//               margin: 0,
//               listStyle: "none", 
//               scrollBehavior: "smooth",
//             }} className="no-scrollbar"
//           >
//             <style>
//   {`
//     .no-scrollbar::-webkit-scrollbar {
//       display: none; /* Chrome, Safari, Opera */
//     }
//     .no-scrollbar {
//       scrollbar-width: none; /* Firefox */
//       -ms-overflow-style: none; /* IE 10+ */
//     }
//   `}
// </style>
//             {images.map((img, index) => (
//               <li
//                 key={index}
//                 style={{
//                   flex: "0 0 auto",
//                   width: "100%",
//                   height: "500px",
//                   borderRadius: "10px",
//                   overflow: "hidden",
//                   cursor: "pointer",
//                   transition: "transform 0.3s",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
//                 onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//               >
//                 <img
//                   src={img}
//                   alt={`Wheel ${index + 1}`}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                   }}
//                 />
//               </li>
//             ))}
//           </ul>

//           {/* Right Arrow */}
//           <button
//             onClick={scrollRight}
//             style={{
//               position: "absolute",
//               right: 0,
//               top: "50%",
//               transform: "translateY(-50%)",
//               zIndex: 1,
//               backgroundColor: "#1976d2",
//               color: "#fff",
//               border: "none",
//               borderRadius: "50%",
//               width: "35px",
//               height: "35px",
//               cursor: "pointer",
//             }}
//           >
//             {">"}
//           </button>
//         </div>
//         <Container style={{marginTop:"10px"}} >


             

         



// <div
//   style={{
//     display: "flex",
//     flexWrap: "wrap", // allows cards to move to next line on smaller screens
//     justifyContent: "center", // center cards horizontally
//     gap: "20px", // spacing between cards
//     padding: "20px",
//   }}
// >
  
//     <div
//   className="cart1"
//   style={{
//     flex: "1 1 250px", // responsive width
//     maxWidth: "300px",
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     padding: "5px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     transition: "transform 0.2s, box-shadow 0.2s",
//     cursor: "pointer",
//     margin: "10px",
//   }}
//   onMouseEnter={(e) => {
//     e.currentTarget.style.transform = "translateY(-5px)";
//     e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
//   }}
//   onMouseLeave={(e) => {
//     e.currentTarget.style.transform = "translateY(0)";
//     e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
//   }}
// >
//   <img
//     src={list[0].car1.image}
//     alt={list[0].car1.name}
//     style={{
//       height: "180px",
//       width: "100%",
//       objectFit: "cover",
//       borderRadius: "8px",
//       marginBottom: "5px",
//     }}
//   />

//   <div
//   style={{
//     display: "flex",
//     justifyContent: "space-between", // Name left, number right
//     alignItems: "center",
//     width: "100%",
//     margin: "10px 0",
//     padding: "0 10px", // optional padding inside the card
//   }}
// >
//   <h2
//     style={{
//       margin: "0",
//       fontSize: "20px",
//       fontWeight: "600",
//       color: "#333",
//     }}
//   >
//     {list[0].car1.name}
//   </h2>
//   <h3
//     style={{
//       margin: "0",
//       fontSize: "14px",
//       fontWeight: "500",
//       color: "#555",
//     }}
//   >
//     {list[0].car1.carNumber}
//   </h3>
// </div>

//   {/* Car details in one row */}
//   <div
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       gap: "15px",
//       fontSize: "14px",
//       color: "#555",
//       margin: "10px 0",
//       flexWrap: "wrap",
//     }}
//   >
//     <span>{list[0].car1.type}</span>
//     <span>{list[0].car1.fuelType}</span>
//     <span>{list[0].car1.seat} Seats</span>
//   </div>

//   <p
//     style={{
//       margin: "10px 0 0 0",
//       fontSize: "16px",
//       color: "#555",
//       textAlign: "center",
//     }}
//   >
//     ${list[0].car1.price} / day
//   </p>

//   <button
//     style={{
//       marginTop: "15px",
//       padding: "8px 16px",
//       backgroundColor: "#1976d2",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       fontWeight: "bold",
//       transition: "background-color 0.2s",
//     }}
//     onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#115293")}
//     onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1976d2")}
//   >
//     Rent Now
//   </button>
// </div>

//   <div
//   className="cart1"
//   style={{
//     flex: "1 1 250px", // responsive width
//     maxWidth: "300px",
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     padding: "5px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     transition: "transform 0.2s, box-shadow 0.2s",
//     cursor: "pointer",
//     margin: "10px",
//   }}
//   onMouseEnter={(e) => {
//     e.currentTarget.style.transform = "translateY(-5px)";
//     e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
//   }}
//   onMouseLeave={(e) => {
//     e.currentTarget.style.transform = "translateY(0)";
//     e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
//   }}
// >
//   <img
//     src={list[0].car1.image}
//     alt={list[0].car1.name}
//     style={{
//       height: "180px",
//       width: "100%",
//       objectFit: "cover",
//       borderRadius: "8px",
//       marginBottom: "5px",
//     }}
//   />

//   <div
//   style={{
//     display: "flex",
//     justifyContent: "space-between", // Name left, number right
//     alignItems: "center",
//     width: "100%",
//     margin: "10px 0",
//     padding: "0 10px", // optional padding inside the card
//   }}
// >
//   <h2
//     style={{
//       margin: "0",
//       fontSize: "20px",
//       fontWeight: "600",
//       color: "#333",
//     }}
//   >
//     {list[0].car1.name}
//   </h2>
//   <h3
//     style={{
//       margin: "0",
//       fontSize: "14px",
//       fontWeight: "500",
//       color: "#555",
//     }}
//   >
//     {list[0].car1.carNumber}
//   </h3>
// </div>

//   {/* Car details in one row */}
//   <div
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       gap: "15px",
//       fontSize: "14px",
//       color: "#555",
//       margin: "10px 0",
//       flexWrap: "wrap",
//     }}
//   >
//     <span>{list[0].car1.type}</span>
//     <span>{list[0].car1.fuelType}</span>
//     <span>{list[0].car1.seat} Seats</span>
//   </div>

//   <p
//     style={{
//       margin: "10px 0 0 0",
//       fontSize: "16px",
//       color: "#555",
//       textAlign: "center",
//     }}
//   >
//     ${list[0].car1.price} / day
//   </p>

//   <button
//     style={{
//       marginTop: "15px",
//       padding: "8px 16px",
//       backgroundColor: "#1976d2",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       fontWeight: "bold",
//       transition: "background-color 0.2s",
//     }}
//     onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#115293")}
//     onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1976d2")}
//   >
//     Rent Now
//   </button>
// </div>

//   {/* Card 3 */}
//   <div
//   className="cart1"
//   style={{
//     flex: "1 1 250px", // responsive width
//     maxWidth: "300px",
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     padding: "5px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     transition: "transform 0.2s, box-shadow 0.2s",
//     cursor: "pointer",
//     margin: "10px",
//   }}
//   onMouseEnter={(e) => {
//     e.currentTarget.style.transform = "translateY(-5px)";
//     e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
//   }}
//   onMouseLeave={(e) => {
//     e.currentTarget.style.transform = "translateY(0)";
//     e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
//   }}
// >
//   <img
//     src={list[0].car1.image}
//     alt={list[0].car1.name}
//     style={{
//       height: "180px",
//       width: "100%",
//       objectFit: "cover",
//       borderRadius: "8px",
//       marginBottom: "5px",
//     }}
//   />

//   <div
//   style={{
//     display: "flex",
//     justifyContent: "space-between", // Name left, number right
//     alignItems: "center",
//     width: "100%",
//     margin: "10px 0",
//     padding: "0 10px", // optional padding inside the card
//   }}
// >
//   <h2
//     style={{
//       margin: "0",
//       fontSize: "20px",
//       fontWeight: "600",
//       color: "#333",
//     }}
//   >
//     {list[0].car1.name}
//   </h2>
//   <h3
//     style={{
//       margin: "0",
//       fontSize: "14px",
//       fontWeight: "500",
//       color: "#555",
//     }}
//   >
//     {list[0].car1.carNumber}
//   </h3>
// </div>

//   {/* Car details in one row */}
//   <div
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       gap: "15px",
//       fontSize: "14px",
//       color: "#555",
//       margin: "10px 0",
//       flexWrap: "wrap",
//     }}
//   >
//     <span>{list[0].car1.type}</span>
//     <span>{list[0].car1.fuelType}</span>
//     <span>{list[0].car1.seat} Seats</span>
//   </div>

//   <p
//     style={{
//       margin: "10px 0 0 0",
//       fontSize: "16px",
//       color: "#555",
//       textAlign: "center",
//     }}
//   >
//     ${list[0].car1.price} / day
//   </p>

//   <button
//     style={{
//       marginTop: "15px",
//       padding: "8px 16px",
//       backgroundColor: "#1976d2",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       fontWeight: "bold",
//       transition: "background-color 0.2s",
//     }}
//     onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#115293")}
//     onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1976d2")}
//   >
//     Rent Now
//   </button>
// </div>


// </div>



             
    
//     </Container></>
//     )
// }
// export default Home;

 import { useEffect, useRef, useState } from "react";
import { FiUser, FiLogIn, FiSearch, FiMenu, FiX, FiCalendar, FiMapPin } from "react-icons/fi";
import { BsFuelPump, BsFillPeopleFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "examples/navbar";
import Footer from "examples/Footer";
import Homes from "layouts/home2";
import PropTypes from "prop-types";

const sliderImages = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1470",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1470",
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1470"
];

const Home = () => {
  const [car, setCar] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const getCars = async () => {
      try {
        const response = await axios.get("https://rentigo-xhqk.onrender.com/user/");
        setCar(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    getCars();
  }, []);


 
const [searches,setSearch]=useState("");
 const [filter,setFilter]=useState(false)

const [fuel_type,setFueltype]=useState("");
const [price,setPrice]=useState("");
const [type,setType]=useState("");


 let filters=car.filter((item)=>
  (type==="" || item.type==type)&&(searches==="" ||item.name.toLowerCase().includes(searches))&&
 (price===""||item.price<=Number(price))&&
 (fuel_type===""||item.fuel_type==fuel_type)
)


 




  return (
<div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100 border-b-8">
      <Navbar  />

       <section className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
        {sliderImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent z-10" />
            <img src={img} alt="Luxury Car" className="h-full w-full object-cover scale-105" />
          </div>
        ))}

         <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Premium Car Rental</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mt-4 mb-6 leading-tight">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Next Adventure</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-lg">
              Experience the thrill of the open road with our exclusive collection of premium and luxury vehicles.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/30 active:scale-95">
                Explore Fleet
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-bold transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
 
       <section className="container mx-auto px-6 py-20">
                  <button className="bg-white shadow-xl rounded-md px-2 py-1 
                  scale-90 transition-all hover:bg-blue-200" onClick={(e)=>setFilter(true)}>
                    Filter</button>
{filter&&(
  <div className="relative left-20 w-1/2   lg:w-1/4 top-[-100px] bg-white text-black p-5 shadow-xl">
    <span className="text-black hover:text-red-600 cursor-pointer justify-items-end flex"
    onClick={(e)=>setFilter(false)}>&times;</span>
   <div > 
    <select value={type} className="w-40 bg-blue-100 rounded-md" onChange={(e)=>setType(e.target.value)}>
      <option value="">Select Type</option>
      <option value="HATCHBACK">HATCHBACK</option>
      <option value="XUV">XUV</option>
      <option value="SUV">SUV</option>
      <option value="SEDAN">SEDAN</option>
    </select>
    </div>  
   <div> 
    <select value={price} className="w-40 bg-blue-100 rounded-md" onChange={(e)=>setPrice(e.target.value)}>
<option value="">Select Price</option>
<option value="5000"> less than 5k</option>
<option value="2000">less than 2k</option>
<option value="1000">less than 1k </option>
    </select>
    </div>  

    <div>
      <select value={fuel_type} className="w-40 bg-blue-100 rounded-md" onChange={(e)=>setFueltype(e.target.value)}>
<option value="">Select Fuel</option>
<option value="Petrol">Petrol</option>
<option value="Diesel">Diesel</option>
<option value="Electric">Electric</option>
<option value="CNG">CNG</option>
      </select>
    </div>
   </div>
)}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-2">Top Cars in Lucknow</h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
          </div>
           <input type="text" className="bg-white border border-black rounded " 
           placeholder="search for available
           cars"  
          onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
           <p className="text-slate-500 font-medium">Showing {car.length} curated vehicles</p>
        </div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filters.length>0?
          filters.map((item, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={`https://rentigo-xhqk.onrender.com/${item.thumbnail}`}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{item.car_number}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-blue-600">₹{item.price}</p>
                    <p className="text-[10px] text-slate-400 font-bold">PER DAY</p>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="bg-slate-50 p-2 rounded-xl flex flex-col items-center justify-center gap-1 border border-slate-100">
                    <BsFillPeopleFill className="text-blue-500" />
                    <span className="text-[11px] font-bold text-slate-600">{item.seat} Seats</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-xl flex flex-col items-center justify-center gap-1 border border-slate-100">
                    <BsFuelPump className="text-blue-500" />
                    <span className="text-[11px] font-bold text-slate-600 uppercase">{item.fuel_type}</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-xl flex flex-col items-center justify-center gap-1 border border-slate-100">
                    <GiGearStickPattern className="text-blue-500" />
                    <span className="text-[11px] font-bold text-slate-600">Auto</span>
                  </div>
                </div>

                {/* Button */}
                <Link 
                  to={`/cardetails/${item._id}`}
                  className="block w-full text-center bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition-all active:scale-95 shadow-lg shadow-slate-200"
                >
                  Rent Now
                </Link>
              </div>
            </div>
          )): "No car available" }
        </div>
      </section>

      <Homes />
      <Footer />
    </div>
  );
};
 


export default Home;






