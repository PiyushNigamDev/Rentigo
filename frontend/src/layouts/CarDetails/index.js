// // //  import axios from "axios";
// // // import { useEffect, useState } from "react";
// // // import { useLocation, useNavigate, useParams } from "react-router-dom";

// // // const CarDetails = () => {
// // //   const [hover, setHover] = useState(false);
// // //     // const {state}=useLocation();
// // //     // const nav=useNavigate();
// // //     // const car=state;
// // //     // if(!car){
// // //     //     return <h2>no cars available</h2>
// // //     // }



 




// // //         const {id}=useParams();

// // //     const [car,setCar]=useState({})
// // //     const getCarById=async()=>{
// // //       try{
// // //     const ids=await axios.get(`https://rentigo-xhqk.onrender.com/user/${id}`);
// // //     setCar(ids.data.data);
     
// // //     console.log(ids.data.data)
// // //       }catch(err){
// // //         console.log(err);
// // //       }
// // //     }
// // //     useEffect(()=>{
// // //         getCarById()
// // //     },[id])
// // //     if (!car || !car.name) {
// // //     return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;
// // //   }

// // //    return (
// // //     <div
// // //       style={{
// // //         minHeight: "100vh",
// // //         backgroundColor: "#f5f5f5",
// // //         padding: "40px",
// // //         fontFamily: "Arial, sans-serif",
// // //         // backgroundColor:"#fffff"
// // //       }}
// // //     >
// // //       {/* CARD */}
// // //       <div
// // //         style={{
// // //           maxWidth: "1400px",
// // //           margin: "auto",
// // //           backgroundColor: "#ffffff",
// // //           borderRadius: "12px",
// // //           boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
// // //           padding: "30px",
// // //           display: "flex",
// // //           gap: "30px",

// // //         }}
// // //       >
// // //         {/* LEFT IMAGE */}
// // //         <div style={{ flex: 1 }}>
// // //           <img
// // //             src={`https://rentigo-xhqk.onrender.com/${car.thumbnail}`} alt="Car"
// // //             style={{
// // //               width: "100%",
// // //               height: "450px",
// // //               objectFit: "cover",
// // //               borderRadius: "10px",
// // //             }}
// // //           />
// // //         </div>

// // //          <div style={{ flex: 1 }}  className=" rounded-md px-2 py-2 shadow-xl">
// // //           <h1 style={{ margin: 0,fontWeight:"bold" }}>{car.name}</h1>

// // //           <h2 style={{ color: "#1976d2", marginTop: "10px" }}>Price:
// // //             ₹ {car.price}/day
// // //           </h2>

// // //           <p
// // //             style={{
// // //               color: "#666",
// // //               lineHeight: "1.6",
// // //               marginTop: "15px",
// // //             }}
// // //           ><span className="text-black text-md"> Description: </span> 
// // //             {car.description}
// // //           </p>

// // //            <div
// // //             style={{
// // //               marginTop: "20px",
// // //               display: "flex",
// // //               flexWrap: "wrap",
// // //               gap: "10px",
            
// // //             }}
// // //            >
// // //             {/* {[
// // //               "Car No: UP32MK2122",
// // //               "Seats: 7",
// // //               "Fuel: Diesel",
// // //               "Type: XUV",
// // //             ].map((item, index) => (
// // //               <span
// // //                 key={index}
// // //                 style={{
// // //                   background: "#eee",
// // //                   padding: "8px 12px",
// // //                   borderRadius: "20px",
// // //                   fontSize: "14px",
// // //                 }}
// // //               >
// // //                 {item}
// // //               </span>
// // //             ))} */}

// // //             <h1 className="px-3 py-2 rounded-lg text-sm bg-slate-400">Car No: {car.car_number}</h1>
// // //             <h1 className="px-3 py-2 rounded-lg text-sm bg-slate-400">Seat: {car.seat}</h1>
// // //             <h1 className="px-3 py-2 rounded-lg text-sm bg-slate-400">Fuel: {car.fuel_type}</h1>
// // //             <h1 className="px-3 py-2 rounded-lg text-sm bg-slate-400">Type: {car.type}</h1>
// // //           </div>
// // // <span  className="px-3 py-2 rounded-lg text-sm bg-slate-400 ">model: {car.model}</span>
// // //           {/* BUTTON */}

// // // <div className="date my-5 grid grid-cols-2 gap-2">
// // // <div> 
// // //   <h1 className="text-sm text-gray-700 font-bold">Booking Date</h1>
// // //   <input type="date" id="book" className="bg-gray-400 rounded-md  max-w-md w-full"/>
// // // </div>

// // // <div >
// // //   <h1 className="text-sm text-gray-700 font-bold">Return Date</h1>
// // //   <input type="date" id="ret" className="bg-gray-400 rounded-md max-w-md w-full "/>
// // // </div>
// // //  </div>


// // // <span className="relative top-20"> 
// // //           <button className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm 
// // //            text-center  mx-auto flex font-semibold hover:bg-blue-600 shadow transition-all 
// // //            hover:scale-90   " onClick={calculate}>Book Now</button></span>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CarDetails;




// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import { FiCalendar, FiUsers, FiInfo, FiTag, FiBriefcase } from "react-icons/fi";
// // import { BsFuelPump } from "react-icons/bs";
// // import Navbar from "examples/navbar"; // Assuming you want the navbar here too

// // const CarDetails = () => {
// //   const { id } = useParams();
// //   const [car, setCar] = useState({});
// //   const [loading, setLoading] = useState(true);

// //   const getCarById = async () => {
// //     try {
// //       const response = await axios.get(`https://rentigo-xhqk.onrender.com/user/${id}`);
// //       setCar(response.data.data);
// //       setLoading(false);
// //     } catch (err) {
// //       console.log(err);
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     getCarById();
// //   }, [id]);

// //   if (loading) {
// //     return (
// //       <div className="flex h-screen items-center justify-center bg-slate-50">
// //         <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
// //       </div>
// //     );
// //   }

// // function calculate(){
// //   let x=new Date(document.getElementById("book").value);
// //   let y=new Date(document.getElementById("return").value);
// //   let z=y-x;
// //   let z1=z/(1000*60*60*24);
// // console.log(z1);


// //    const priceText = document.getElementById("box")?.innerText;
// // const priceNumber = Number(priceText.replace("₹", ""));
// // console.log(priceNumber*z1); 

// // // const prize=document.getElementById("box")?.innerText;
// // // const prizeText=Number(prize.replace("$",""));
// // // console.log(prizeText*z1);
// //  }






// //   return (
// //     <div className="min-h-screen bg-slate-50 font-sans">
// //       <Navbar />
      
// //       <main className="container mx-auto px-4 py-24 md:py-32">
// //         <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
// //           {/* LEFT: IMAGE SECTION */}
// //           <div className="relative group">
// //             <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-blue-600 to-cyan-400 opacity-20 blur transition duration-1000 group-hover:opacity-40"></div>
// //             <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl">
// //               <img
// //                 src={`https://rentigo-xhqk.onrender.com/${car.thumbnail}`}
// //                 alt={car.name}
// //                 className="h-[400px] md:h-[550px] w-full object-cover transition-transform duration-700 hover:scale-105"
// //               />
// //             </div>
// //           </div>

// //           {/* RIGHT: INFO SECTION */}
// //           <div className="flex flex-col">
// //             <div className="mb-6">
// //               <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
// //                 {car.type}
// //               </span>
// //               <h1 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
// //                 {car.name}
// //               </h1>
// //               <div className="mt-4 flex items-center gap-2">
// //                 <span id="box" className="text-3xl font-black text-blue-600">₹{car.price}</span>
// //                 <span className="text-slate-500 font-medium">/ day</span>
// //               </div>
// //             </div>

// //             {/* DESCRIPTION */}
// //             <div className="mb-8 rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
// //               <h3 className="mb-2 flex items-center gap-2 font-bold text-slate-900">
// //                 <FiInfo className="text-blue-500" /> Description
// //               </h3>
// //               <p className="leading-relaxed text-slate-600">
// //                 {car.description || "Experience luxury and comfort with this premium vehicle, perfect for both city drives and long journeys."}
// //               </p>
// //             </div>

// //             {/* SPECS GRID */}
// //             <div className="grid grid-cols-2 gap-4 mb-8">
// //               <div className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">
// //                 <div className="rounded-lg bg-blue-50 p-2 text-blue-600"><FiTag /></div>
// //                 <div>
// //                   <p className="text-[10px] font-bold uppercase text-slate-400">Model</p>
// //                   <p className="text-sm font-bold text-slate-900">{car.model || '2024'}</p>
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">
// //                 <div className="rounded-lg bg-blue-50 p-2 text-blue-600"><FiUsers /></div>
// //                 <div>
// //                   <p className="text-[10px] font-bold uppercase text-slate-400">Seats</p>
// //                   <p className="text-sm font-bold text-slate-900">{car.seat} People</p>
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">
// //                 <div className="rounded-lg bg-blue-50 p-2 text-blue-600"><BsFuelPump /></div>
// //                 <div>
// //                   <p className="text-[10px] font-bold uppercase text-slate-400">Fuel Type</p>
// //                   <p className="text-sm font-bold text-slate-900 uppercase">{car.fuel_type}</p>
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">
// //                 <div className="rounded-lg bg-blue-50 p-2 text-blue-600"><FiBriefcase /></div>
// //                 <div>
// //                   <p className="text-[10px] font-bold uppercase text-slate-400">Reg No.</p>
// //                   <p className="text-sm font-bold text-slate-900 uppercase">{car.car_number}</p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* DATE PICKERS & BOOKING */}
// //             <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-2xl shadow-blue-200">
// //               <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-8">
// //                 <div className="space-y-2">
// //                   <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
// //                     <FiCalendar /> Booking Date
// //                   </label>
// //                   <input 
// //                     type="date" id="book"
// //                     className="w-full rounded-xl bg-white/10 border border-white/20 p-3 text-white outline-none focus:bg-white/20 focus:border-blue-400 transition-all" 
// //                   />
// //                 </div>
// //                 <div className="space-y-2">
// //                   <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
// //                     <FiCalendar /> Return Date
// //                   </label>
// //                   <input 
// //                     type="date" id="return"
// //                     className="w-full rounded-xl bg-white/10 
                    
// //                     border border-white/20 p-3 text-white outline-none focus:bg-white/20
// //                      focus:border-blue-400 transition-all" 
// //                   />
// //                 </div>
// //               </div>

// //               <button 
              
// //                 className="w-full rounded-2xl bg-blue-600 py-4 text-center font-black uppercase tracking-widest
// //                  text-white shadow-xl shadow-blue-900/20 transition-all hover:bg-blue-500
// //                   hover:shadow-blue-500/40 active:scale-[0.98]"
// //              onClick={calculate} >
// //                Book
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default CarDetails;




import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiCalendar, FiUsers, FiAlertCircle } from "react-icons/fi";
import { BsFuelPump, Bs123 } from "react-icons/bs";
import { FaCar, FaFileAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import Navbar from "examples/navbar";
import Footer from "examples/Footer";
// import {useRazorpay,RazorpayOrderOptions} from "react-razorpay";
// import { RuleTester } from "eslint";
// import Razorpay from "react-razorpay/dist/razorpay";
// const rzp = new window.Razorpay(options);
const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(true);

  const [bookModal, setBookModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [summary, setSummary] = useState({ days: 0, total: 0 });
const [isBooked,setBooked]=useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    bookingDate: "",
    returnDate: "",
    status: "Pending",
    carBooked: "",
  });

  const [availableCars, setAvailableCars] = useState([]);

  // Fetch car details by ID
  const getCarById = async () => {
    try {
      const res = await axios.get(`https://rentigo-xhqk.onrender.com/user/${id}`);
      setCar(res.data.data);
      setFormData((prev) => ({ ...prev, carBooked: res.data.data._id }));
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      Swal.fire({ title: "Error", text: "Failed to load car details", icon: "error" });
    }
  };

  // Fetch all available cars for dropdown
  const getAvailableCars = async () => {
    try {
      const res = await axios.get("https://rentigo-xhqk.onrender.com/user");
      setAvailableCars(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCarById();
    getAvailableCars();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle booking: validate dates, calculate summary
  const handleBooking = () => {
    const startDate = new Date(formData.bookingDate);
    const endDate = new Date(formData.returnDate);

    if (!formData.bookingDate || !formData.returnDate) {
      Swal.fire({ title: "Error!", text: "Please select booking and return dates", icon: "error" });
      return;
    }

    if (endDate <= startDate) {
      Swal.fire({ title: "Error!", text: "Return date must be after booking date", icon: "error" });
      return;
    }

    const diffInDays = Math.ceil((endDate - startDate) / (1000 * 3600 * 24));
    const totalPrice = diffInDays * car.price;

    setSummary({ days: diffInDays, total: totalPrice });
    setBookModal(false);
    setShowModal(true);
  };

  // Confirm booking and send to backend
  const confirmBooking = async () => {
    try {
      await axios.post("https://rentigo-xhqk.onrender.com/user/createVendor", formData);
      
      setShowModal(false);
      setBooked(true);
      Swal.fire({ title: "Success", text: "Car booking confirmed!", icon: "success" });
    } catch (err) {
      console.error(err);
      Swal.fire({ title: "Error", text: "Booking failed", icon: "error" });
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

// razorpay


// const handlePayment=(data)=>{
// const options:RazorpayOrderOptions={
//   key:"rzp_test_SDyBLosgN5EUJ6",
//   amount:data.totalPrice*100,
//   currency:"INR",
//   name:"Test Company",
//   description:"Test Transaction",
//   order_id:data.order_id,
//   handler:async(response)=>{
//     console.log(response);
//     const res=await verifyPayment(response.razorpay_payment_id);
//     if(res.status){
//       Swal.fire({
//         title:"Payment success",
//         icon:"success",
//         draggable:true
//       });
//       return;
//     }
//   },
//   prefil:{
//     name:data.name,
//     contact:data.mobile
//   },
//   theme:{
//     color:"#F37254",
//   }
// },
// const razorpayInstance=new Razorpay(options);
// razorpayInstance.open();
// }


const loadRazorpay = () => {
  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => reject(false);
      document.body.appendChild(script);
    } else {
      resolve(true);
    }
  });
};


const handlePayment = async () => {
  try {
    // 1️⃣ Load Razorpay SDK dynamically
    const loaded = await loadRazorpay();
    if (!loaded) {
      Swal.fire("Error", "Razorpay SDK failed to load", "error");
      return;
    }

    // 2️⃣ Create order from backend
    const { data } = await axios.post("https://rentigo-xhqk.onrender.com/user/orderid", { amount: summary.total });
    if (!data.status) {
      Swal.fire("Error", "Order creation failed", "error");
      return;
    }

    const order = data.data;

    // 3️⃣ Razorpay Options
    const options = {
      key: "rzp_test_SDyBLosgN5EUJ6",
      amount: order.amount, // amount in paise
      currency: order.currency,
      name: "Car Rental",
      description: "Car Booking Payment",
      order_id: order.id,
      handler: async function (response) {
        try {
          // verify payment
          const verifyRes = await axios.get(
            `https://rentigo-xhqk.onrender.com/user/verify/${response.razorpay_payment_id}`,
            { params: { order_id: response.razorpay_order_id, signature: response.razorpay_signature } }
          );

          if (verifyRes.data.status) {
            await confirmBooking(); // save booking after success
            Swal.fire("Success", "Payment Successful!", "success");
            setShowModal(false);
          } else {
            Swal.fire("Error", "Payment Verification Failed", "error");
          }
        } catch (err) {
          Swal.fire("Error", "Verification Error", "error");
        }
      },
      prefill: {
        name: formData.name,
        contact: formData.mobile,
      },
      theme: { color: "#2563EB" },
    };

    // 4️⃣ Open Razorpay Checkout
    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (err) {
    console.error(err);
    Swal.fire("Error", "Payment failed", "error");
  }
};








  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-blue-600 to-cyan-400 opacity-20 blur transition duration-1000 group-hover:opacity-40"></div>
            <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl">
              <img
                src={`https://rentigo-xhqk.onrender.com/${car.thumbnail}`}
                alt={car.name}
                className="h-[400px] md:h-[550px] w-full object-cover"
              />
            </div>
          </div>

          {/* DETAILS */}
          <div className="flex flex-col">
          <div className="flex justify-start mb-2">
  <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
    {car.type}
  </span>
</div>
            <h1 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">{car.name}</h1>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-3xl font-black text-blue-600">₹{car.price}</span>
              <span className="text-slate-500 font-medium">/ day</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8 mt-6">
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">
                <div className="rounded-lg bg-blue-50 p-2 text-blue-600"><FiUsers /></div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">Seats</p>
                  <p className="text-sm font-bold text-slate-900">{car.seat}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">
                <div className="rounded-lg bg-blue-50 p-2 text-blue-600"><BsFuelPump /></div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">Fuel</p>
                  <p className="text-sm font-bold text-slate-900">{car.fuel_type}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">
                <div className="rounded-lg bg-blue-50 p-2 text-blue-600"><FaCar /></div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">Model</p>
                  <p className="text-sm font-bold text-slate-900">{car.model}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">
                <div className="rounded-lg bg-blue-50 p-2 text-blue-600"><Bs123 /></div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">Car No.</p>
                  <p className="text-sm font-bold text-slate-900">{car.car_number}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-slate-100 shadow-sm col-span-2">
                <div className="rounded-lg bg-blue-50 p-2 text-blue-600"><FaFileAlt /></div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">Description</p>
                  <p className="text-sm font-bold text-slate-900">{car.description}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setBookModal(true)}
              disabled={isBooked}
              className={`w-full rounded-2xl py-4 font-black uppercase tracking-widest transition-all
    ${isBooked ? "bg-green-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500 text-white"}`}
>
  {isBooked ? "Booked" : "Book"}
            </button>
          </div>
        </div>
      </main>

      {/* BOOKING MODAL */}
      {bookModal && (
        <form className="fixed inset-0 z-50 flex items-center justify-center" onSubmit={(e) => e.preventDefault()}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setBookModal(false)}></div>
          <div className="relative z-50 w-full max-w-lg rounded-3xl bg-slate-900 p-8 text-white shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Book Your Car</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {["name", "mobile", "bookingDate", "returnDate"].map((field) => (
                <div key={field}>
                  <fieldset className="relative border border-white/30 rounded-xl px-4 pb-3 pt-6">
                    <legend className="absolute -top-3 left-3 bg-slate-900 px-2 text-xs font-bold uppercase text-slate-400">{field === "mobile" ? "Mobile" : field === "bookingDate" ? "Booking Date" : field === "returnDate" ? "Return Date" : "Name"}</legend>
                    <input
                      type={field.includes("Date") ? "date" : field === "mobile" ? "number" : "text"}
                      name={field}
                      className="w-full bg-transparent outline-none text-white placeholder:text-slate-500"
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={field}
                      required
                    />
                  </fieldset>
                </div>
              ))}

              <div>
                <fieldset className="relative border border-white/30 rounded-xl px-4 pb-3 pt-6">
                  <legend className="absolute -top-3 left-3 bg-slate-900 px-2 text-xs font-bold uppercase text-slate-400">Status</legend>
                  <select name="status" className="w-full bg-transparent outline-none text-slate-400" value={formData.status} onChange={handleChange} required>
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Canceled">Canceled</option>
                  </select>
                </fieldset>
              </div>

              <div>
                <fieldset className="relative border border-white/30 rounded-xl px-4 pb-3 pt-6">
                  <legend className="absolute -top-3 left-3 bg-slate-900 px-2 text-xs font-bold uppercase text-slate-400">
                    Selected Car</legend>
                  <select name="carBooked" className="w-full bg-transparent outline-none text-slate-400" 
                  value={formData.carBooked} onChange={handleChange} required>
                    <option value="">Select car</option>
                    {availableCars.map((v) => (
                      <option key={v._id} value={v._id}>{v.name}</option>
                    ))}
                  </select>
                </fieldset>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button type="button" onClick={() => setBookModal(false)} className="flex-1 rounded-xl border border-white/30 py-3 font-bold hover:bg-white/10">Cancel</button>
              <button type="button" onClick={handleBooking} className="flex-1
               rounded-xl bg-blue-600 py-3 font-bold hover:bg-blue-700">Continue</button>
            </div>
          </div>
        </form>
      )}

      {/* CONFIRMATION MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-50 p-4 text-blue-600">
                <FiAlertCircle size={40} />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Confirm Booking</h2>
              <p className="mt-2 text-slate-500">Please review your trip details below</p>

              <div className="my-6 w-full space-y-3 rounded-2xl bg-slate-50 p-6">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Duration</span>
                  <span className="font-bold text-slate-900">{summary.days} Days</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Daily Rate</span>
                  <span className="font-bold text-slate-900">₹{car.price}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-lg font-bold text-slate-900">Total Amount</span>
                  <span className="text-lg font-black text-blue-600">₹{summary.total}</span>
                </div>
              </div>

              <div className="flex w-full gap-3">
                <button onClick={() => setShowModal(false)} className="flex-1 rounded-xl border-2 border-slate-200 py-3 font-bold text-slate-600 transition-all hover:bg-slate-50">Cancel</button>
                <button onClick={handlePayment} className="flex-1 rounded-xl
                 bg-blue-600 py-3 font-bold text-white shadow-lg shadow-blue-200
                  transition-all hover:bg-blue-700">Confirm Pay</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CarDetails;



// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { FiUsers, FiAlertCircle } from "react-icons/fi";
// import { BsFuelPump } from "react-icons/bs";
// import { FaCar, FaFileAlt } from "react-icons/fa";
// import Swal from "sweetalert2";
// import Navbar from "examples/navbar";
// import Footer from "examples/Footer";

// const CarDetails = () => {
//   const { id } = useParams();

//   const [car, setCar] = useState({});
//   const [loading, setLoading] = useState(true);

//   // Form States
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [bookingDate, setBookingDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");
//   const [status, setStatus] = useState("");

//   // Modal & Summary
//   const [showModal, setShowModal] = useState(false);
//   const [summary, setSummary] = useState({ days: 0, total: 0 });

//   // Fetch car by id
//   const getCarById = async (id) => {
//     try {
//       const response = await axios.get(
//         `https://rentigo-xhqk.onrender.com/user/${id}`
//       );
//       setCar(response.data.data);
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getCarById();
//   }, [id]);



//   // const getCars=async()=>{
//   //   try{
//   // const gettss=await axios.get("https://rentigo-xhqk.onrender.com/user");
//   // setCarBookedId(gettss.data.data);
//   // console.log("get in update",gettss.data.data);
//   //   }catch(err){
//   //     console.log(err);
//   //   }
//   // }
  
  
//   //  useEffect(()=>{
//   // getCars();
//   //  },[])
  

//   // Handle Booking Click (calculate first)
//   const handleBookingClick = () => {
//     if (!name || !mobile || !bookingDate || !returnDate || !status) {
//       Swal.fire("Error!", "Please fill all fields", "error");
//       return;
//     }

//     const startDate = new Date(bookingDate);
//     const endDate = new Date(returnDate);

//     if (endDate <= startDate) {
//       Swal.fire(
//         "Error!",
//         "Return date must be greater than booking date",
//         "error"
//       );
//       return;
//     }

//     const diffInTime = endDate - startDate;
//     const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
//     const totalPrice = diffInDays * car.price;

//     setSummary({ days: diffInDays, total: totalPrice });
//     setShowModal(true);
//   };

//   // Confirm Booking (Send to backend)
//   const confirmBooking = async () => {
//     try {
//       await axios.post("https://rentigo-xhqk.onrender.com/user/createVendor", {
//         name,
//         mobile,
//         bookingDate,
//         returnDate,
//         status,
//         carBooked
//         // totalAmount: summary.total,
//       });

//       setShowModal(false);

//       Swal.fire(
//         "Success!",
//         "Car booked successfully",
//         "success"
//       );

//       // Reset form
//       setName("");
//       setMobile("");
//       setBookingDate("");
//       setReturnDate("");
//       setStatus("");
//     } catch (err) {
//       console.error(err);
//       Swal.fire("Error!", "Booking failed", "error");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex h-screen items-center justify-center bg-slate-50">
//         <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans">
//       <Navbar />

//       <main className="container mx-auto px-4 py-24 md:py-32">
//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

//           {/* LEFT IMAGE */}
//           <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
//             <img
//               src={`https://rentigo-xhqk.onrender.com/${car.thumbnail}`}
//               alt={car.name}
//               className="h-[500px] w-full object-cover"
//             />
//           </div>

//           {/* RIGHT SECTION */}
//           <div>
//             <h1 className="text-4xl font-black">{car.name}</h1>
//             <p className="text-2xl text-blue-600 font-bold mt-2">
//               ₹{car.price} / day
//             </p>

//             <div className="grid grid-cols-2 gap-4 mt-6">
//               <div className="bg-white p-4 rounded-xl shadow">
//                 <FiUsers /> Seats: {car.seat}
//               </div>
//               <div className="bg-white p-4 rounded-xl shadow">
//                 <BsFuelPump /> Fuel: {car.fuel_type}
//               </div>
//               <div className="bg-white p-4 rounded-xl shadow">
//                 <FaCar /> Model: {car.model}
//               </div>
//               <div className="bg-white p-4 rounded-xl shadow">
//                 <FaFileAlt /> Car No: {car.car_number}
//               </div>
//             </div>

//             {/* BOOKING FORM */}
//             <div className="mt-8 bg-slate-900 p-6 rounded-3xl text-white">
//               <div className="grid grid-cols-1 gap-4">

//                 <input
//                   type="text"
//                   placeholder="Enter Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="p-3 rounded-xl bg-white/10"
//                 />

//                 <input
//                   type="tel"
//                   placeholder="Enter Mobile"
//                   value={mobile}
//                   onChange={(e) => setMobile(e.target.value)}
//                   className="p-3 rounded-xl bg-white/10"
//                 />

//                 <input
//                   type="date"
//                   value={bookingDate}
//                   onChange={(e) => setBookingDate(e.target.value)}
//                   className="p-3 rounded-xl bg-white/10"
//                 />

//                 <input
//                   type="date"
//                   value={returnDate}
//                   onChange={(e) => setReturnDate(e.target.value)}
//                   className="p-3 rounded-xl bg-white/10"
//                 />

//                 <select
//                   value={status}
//                   onChange={(e) => setStatus(e.target.value)}
//                   className="p-3 rounded-xl bg-white/10"
//                 >
//                   <option value="">Select Status</option>
//                   <option value="Pending">Pending</option>
//                   <option value="Confirmed">Confirmed</option>
//                 </select>

//  <select
//           type="text"
//           value={carBooked}
//           onChange={(e) => setCarBooked(e.target.value)}
//           placeholder=" enter booking date"
//           required
// style={{
//       width: "100%",
//       padding: "10px 16px",
//       borderRadius: "8px",
//       border: "1px solid #d1d5db",
//       outline: "none",
//     }}        > 
//     <option value="">select the car</option>
//       {carBookedId.map((v)=>(
// <option key={v._id} value={v._id}>{v.name}</option>
//       ))}
//     </select>
//                 <button
//                   onClick={handleBookingClick}
//                   className="bg-blue-600 p-4 rounded-2xl font-bold hover:bg-blue-500"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* CONFIRM MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-3xl w-96 text-center">
//             <FiAlertCircle size={40} className="mx-auto text-blue-600" />
//             <h2 className="text-2xl font-bold mt-4">Confirm Booking</h2>

//             <div className="mt-4 text-left">
//               <p>Duration: {summary.days} Days</p>
//               <p>Daily Rate: ₹{car.price}</p>
//               <p className="font-bold text-lg">
//                 Total: ₹{summary.total}
//               </p>
//             </div>

//             <div className="flex gap-4 mt-6">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="flex-1 border p-3 rounded-xl"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={confirmBooking}
//                 className="flex-1 bg-blue-600 text-white p-3 rounded-xl"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// };

// export default CarDetails;



// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { FiUsers, FiAlertCircle } from "react-icons/fi";
// import { BsFuelPump } from "react-icons/bs";
// import { FaCar, FaFileAlt } from "react-icons/fa";
// import Swal from "sweetalert2";
// import Navbar from "examples/navbar";
// import Footer from "examples/Footer";

// const CarDetails = () => {
//   const { id } = useParams();

//   const [car, setCar] = useState({});
//   const [loading, setLoading] = useState(true);

//   // 🔹 Form States
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [bookingDate, setBookingDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");
//   const [status, setStatus] = useState("");
//   const [carBooked, setCarBooked] = useState("");

//   // 🔹 All cars for dropdown
//   const [carList, setCarList] = useState([]);

//   // 🔹 Modal
//   const [showModal, setShowModal] = useState(false);
//   const [summary, setSummary] = useState({ days: 0, total: 0 });

//   // ✅ Get single car by id
//   const getCarById = async () => {
//     try {
//       const response = await axios.get(
//         `https://rentigo-xhqk.onrender.com/user/${id}`
//       );
//       setCar(response.data.data);
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//     }
//   };

//   // ✅ Get all cars (for dropdown)
//   const getAllCars = async () => {
//     try {
//       const res = await axios.get("https://rentigo-xhqk.onrender.com/user");
//       setCarList(res.data.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     getCarById();
//     getAllCars();
//   }, [id]);

//   // ✅ Calculate Booking
//   const handleBookingClick = () => {
//     if (!name || !mobile || !bookingDate || !returnDate || !status || !carBooked) {
//       Swal.fire("Error!", "Please fill all fields", "error");
//       return;
//     }

//     const startDate = new Date(bookingDate);
//     const endDate = new Date(returnDate);

//     if (endDate <= startDate) {
//       Swal.fire("Error!", "Return date must be greater than booking date", "error");
//       return;
//     }

//     const diffDays = Math.ceil(
//       (endDate - startDate) / (1000 * 3600 * 24)
//     );

//     const totalPrice = diffDays * car.price;

//     setSummary({ days: diffDays, total: totalPrice });
//     setShowModal(true);
//   };

//   // ✅ Confirm Booking
//   const confirmBooking = async () => {
//     try {
//       await axios.post("https://rentigo-xhqk.onrender.com/user/createVendor", {
//         name,
//         mobile,
//         bookingDate,
//         returnDate,
//         status,
//         carBooked,
//         totalAmount: summary.total,
//       });

//       setShowModal(false);

//       Swal.fire("Success!", "Car booked successfully", "success");

//       // Reset form
//       setName("");
//       setMobile("");
//       setBookingDate("");
//       setReturnDate("");
//       setStatus("");
//       setCarBooked("");
//     } catch (err) {
//       console.error(err);
//       Swal.fire("Error!", "Booking failed", "error");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex h-screen items-center justify-center">
//         <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <Navbar />

//       <main className="container mx-auto px-4 py-20">
//         <div className="grid lg:grid-cols-2 gap-10">

//           {/* LEFT */}
//           <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
//             <img
//               src={`https://rentigo-xhqk.onrender.com/${car.thumbnail}`}
//               alt={car.name}
//               className="w-full h-[450px] object-cover"
//             />
//           </div>

//           {/* RIGHT */}
//           <div>
//             <h1 className="text-4xl font-bold">{car.name}</h1>
//             <p className="text-2xl text-blue-600 mt-2">
//               ₹{car.price} / day
//             </p>

//             <div className="grid grid-cols-2 gap-4 mt-6">
//               <div className="bg-white p-4 rounded-xl shadow">
//                 <FiUsers /> Seats: {car.seat}
//               </div>
//               <div className="bg-white p-4 rounded-xl shadow">
//                 <BsFuelPump /> Fuel: {car.fuel_type}
//               </div>
//               <div className="bg-white p-4 rounded-xl shadow">
//                 <FaCar /> Model: {car.model}
//               </div>
//               <div className="bg-white p-4 rounded-xl shadow">
//                 <FaFileAlt /> Car No: {car.car_number}
//               </div>
//             </div>

//             {/* BOOKING FORM */}
//             <div className="mt-8 bg-slate-900 p-6 rounded-3xl text-white space-y-4">

//               <input
//                 type="text"
//                 placeholder="Enter Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-3 rounded-xl bg-white/10"
//               />

//               <input
//                 type="tel"
//                 placeholder="Enter Mobile"
//                 value={mobile}
//                 onChange={(e) => setMobile(e.target.value)}
//                 className="w-full p-3 rounded-xl bg-white/10"
//               />

//               <input
//                 type="date"
//                 value={bookingDate}
//                 onChange={(e) => setBookingDate(e.target.value)}
//                 className="w-full p-3 rounded-xl bg-white/10"
//               />

//               <input
//                 type="date"
//                 value={returnDate}
//                 onChange={(e) => setReturnDate(e.target.value)}
//                 className="w-full p-3 rounded-xl bg-white/10"
//               />

//               <select
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//                 className="w-full p-3 rounded-xl bg-white/10 text-gray-500"
//               >
//                 <option value="">Select Status</option>
//                 <option value="Pending">Pending</option>
//                 <option value="Confirmed">Confirmed</option>
//               </select>

//               {/* Car Dropdown */}
//               <select
//                 value={carBooked}
//                 onChange={(e) => setCarBooked(e.target.value)}
//                 className="w-full p-3 rounded-xl bg-white/10 text-gray-500"
//               >
//                 <option value="">Select Car</option>
//                 {carList.map((c) => (
//                   <option key={c._id} value={c._id}>
//                     {c.name}
//                   </option>
//                 ))}
//               </select>

//               <button
//                 onClick={handleBookingClick}
//                 className="w-full bg-blue-600 p-4 rounded-2xl font-bold"
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-3xl w-96 text-center">
//             <FiAlertCircle size={40} className="mx-auto text-blue-600" />
//             <h2 className="text-2xl font-bold mt-4">Confirm Booking</h2>

//             <div className="mt-4 text-left">
//               <p>Duration: {summary.days} Days</p>
//               <p>Total: ₹{summary.total}</p>
//             </div>

//             <div className="flex gap-4 mt-6">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="flex-1 border p-3 rounded-xl"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={confirmBooking}
//                 className="flex-1 bg-blue-600 text-white p-3 rounded-xl"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// };

// export default CarDetails;