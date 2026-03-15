// import { useRef } from "react";

// const Homes=()=>{
//   const sliderRef = useRef(null);

//   const scrollLeft = () => {
//     sliderRef.current.scrollBy({
//       left: -sliderRef.current.offsetWidth,
//       behavior: "smooth",
//     });
//   };

//   const scrollRight = () => {
//     sliderRef.current.scrollBy({
//       left: sliderRef.current.offsetWidth,
//       behavior: "smooth",
//     });
//   };


//     return(
//         <>
//        <div className="bg-gray-200 container mx-auto py-3 px-3 mb-3 rounded grid lg:grid-cols-3 md:grid-cols-1
//        sm:grid-cols-1">
//         <div className="box1  relative top-36 left-20">
//           <h1 className="text-black font-semibold text-5xl">Top</h1>
//           <h1   className="text-black font-semibold text-5xl">Categories</h1>
//         </div>

// <div className="box2  mt-3  ">

// <div className="h-40 max-w-md w-96 bg-cover items-center flex  justify-center bg-no-repeat rounded-lg px-2"
//  style={{backgroundImage:'url("https://www.zoomcar.com/img/hompage-rebrand/top-categories/deliver.webp")'}}>
// <button className="text-sm bg-black/20 text-white px-2 py-1 rounded-lg   text-center mx-auto 
// backdrop-blur-2xl relative top-14">Delivery</button>
// </div>

// <div
//   className="h-40 w-96 max-w-md mt-2 bg-no-repeat bg-cover rounded-lg px-2 flex items-center justify-center"
//   style={{
//     backgroundImage:
//       'url("https://www.zoomcar.com/img/hompage-rebrand/top-categories/rated.webp")',
//   }}
// >
//   <button className="text-sm bg-black/40 relative top-14 px-3 py-1 rounded-lg backdrop-blur-2xl text-white">
//     Top Rated
//   </button>
// </div>

// </div>

// <div className="box3 ">

// <div className="h-96 rounded-lg px-2 py-2 bg-cover bg-no-repeat" style={{backgroundImage:'url("https://www.zoomcar.com/img/hompage-rebrand/top-categories/suv.avif")'}}>
// <button className="bg-black/20 text-white rounded-lg backdrop-blur-2xl text-sm
//  px-2 py-1">Budget</button></div>

// </div>
//        </div>

//        <div className="container mx-auto bg-gray-300 rounded py-5 mb-3 px-8">
//         <h1 className="text-xl font-semibold text-center text-black">Top Travel Destination</h1>

// {/* <div className="my-3 grid grid-cols-4 gap-2">
//   <div className="box1 bg-white rounded-lg w-auto"> 
// <img src="https://www.himalayanglacier.com/wp-content/uploads/2021/12/Taj-Mahal-India.jpg" className="h-auto
// rounded-lg"/>
// <h1 className="mt-3 text-black text-base px-2">Best Places to Visit During Summer Vocation in India 2026</h1>
// <h1 className="text-gray-600 my-1 text-sm px-2 mb-2">Explore the best places to visit during summer vocation in India beaches, hill stations, cities, and calm escapes.</h1>
//   </div>

//    <div className="box1 bg-white rounded-lg w-auto"> 
//   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQplXgxpZtkXwosBVku4zWZxVjK0-hU3PhLHA&s"
// className="h-auto
// rounded-lg"/>
// <h1 className="mt-3 text-black text-base px-2">Best Places to Visit During Summer Vocation in India 2026</h1>
// <h1 className="text-gray-600 my-1 text-sm px-2 mb-2">Explore the best places to visit during summer vocation in India beaches, hill stations, cities, and calm escapes.</h1>
//   </div>


//    <div className="box1 bg-white rounded-lg w-auto"> 
// <img src="https://www.himalayanglacier.com/wp-content/uploads/2021/12/Taj-Mahal-India.jpg" className="h-auto
// rounded-lg"/>
// <h1 className="mt-3 text-black text-base px-2">Best Places to Visit During Summer Vocation in India 2026</h1>
// <h1 className="text-gray-600 my-1 text-sm px-2 mb-2">Explore the best places to visit during summer vocation in India beaches, hill stations, cities, and calm escapes.</h1>
//   </div>


//    <div className="box1 bg-white rounded-lg w-auto"> 
// <img src="https://www.himalayanglacier.com/wp-content/uploads/2021/12/Taj-Mahal-India.jpg" className="h-auto 
// rounded-lg"/>
// <h1 className="mt-3 text-black text-base px-2">Best Places to Visit During Summer Vocation in India 2026</h1>
// <h1 className="text-gray-600 my-1 text-sm px-2 mb-2">Explore the best places to visit during summer vocation in India beaches, hill stations, cities, and calm escapes.</h1>
//   </div>
// </div> */}


//  <div className="relative my-3">
//       {/* Buttons */}
//       <button
//         onClick={scrollLeft}
//         className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
//       >
//         ◀
//       </button>

//       <button
//         onClick={scrollRight}
//         className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
//       >
//         ▶
//       </button>

//       {/* Slider */}
//       <div
//         ref={sliderRef}
//         className="flex gap-2 overflow-x-hidden scroll-smooth"
//       >
//         <div className="box1 bg-white rounded-lg w-[85%] sm:w-[45%] lg:w-[25%] shrink-0">
//           <img
//             src="https://www.himalayanglacier.com/wp-content/uploads/2021/12/Taj-Mahal-India.jpg"
//             className="h-auto rounded-lg"
//           />
//           <h1 className="mt-3 text-black text-base px-2">
//             Best Places to Visit During Summer Vocation in India 2026
//           </h1>
//           <h1 className="text-gray-600 my-1 text-sm px-2 mb-2">
//             Explore the best places to visit during summer vocation in India
//             beaches, hill stations, cities, and calm escapes.
//           </h1>
//         </div>

//         <div className="box1 bg-white rounded-lg w-[85%] sm:w-[45%] lg:w-[25%] shrink-0">
//           <img
//             src="https://www.himalayanglacier.com/wp-content/uploads/2021/12/Taj-Mahal-India.jpg"
//             className="h-auto rounded-lg"
//           />
//           <h1 className="mt-3 text-black text-base px-2">
//             Best Places to Visit During Summer Vocation in India 2026
//           </h1>
//           <h1 className="text-gray-600 my-1 text-sm px-2 mb-2">
//             Explore the best places to visit during summer vocation in India
//             beaches, hill stations, cities, and calm escapes.
//           </h1>
//         </div>


//         <div className="box1 bg-white rounded-lg w-[85%] sm:w-[45%] lg:w-[25%] shrink-0">
//           <img
//             src="https://www.himalayanglacier.com/wp-content/uploads/2021/12/Taj-Mahal-India.jpg"
//             className="h-auto rounded-lg"
//           />
//           <h1 className="mt-3 text-black text-base px-2">
//             Best Places to Visit During Summer Vocation in India 2026
//           </h1>
//           <h1 className="text-gray-600 my-1 text-sm px-2 mb-2">
//             Explore the best places to visit during summer vocation in India
//             beaches, hill stations, cities, and calm escapes.
//           </h1>
//         </div>




//         <div className="box1 bg-white rounded-lg w-[85%] sm:w-[45%] lg:w-[25%] shrink-0">
//           <img
//             src="https://www.himalayanglacier.com/wp-content/uploads/2021/12/Taj-Mahal-India.jpg"
//             className="h-auto rounded-lg"
//           />
//           <h1 className="mt-3 text-black text-base px-2">
//             Best Places to Visit During Summer Vocation in India 2026
//           </h1>
//           <h1 className="text-gray-600 my-1 text-sm px-2 mb-2">
//             Explore the best places to visit during summer vocation in India
//             beaches, hill stations, cities, and calm escapes.
//           </h1>
//         </div>




//         <div className="box1 bg-white rounded-lg w-[85%] sm:w-[45%] lg:w-[25%] shrink-0">
//           <img
//             src="https://www.himalayanglacier.com/wp-content/uploads/2021/12/Taj-Mahal-India.jpg"
//             className="h-auto rounded-lg"
//           />
//           <h1 className="mt-3 text-black text-base px-2">
//             Best Places to Visit During Summer Vocation in India 2026
//           </h1>
//           <h1 className="text-gray-600 my-1 text-sm px-2 mb-2">
//             Explore the best places to visit during summer vocation in India
//             beaches, hill stations, cities, and calm escapes.
//           </h1>
//         </div>




//         <div className="box1 bg-white rounded-lg w-[85%] sm:w-[45%] lg:w-[25%] shrink-0">
//           <img
//             src="https://www.himalayanglacier.com/wp-content/uploads/2021/12/Taj-Mahal-India.jpg"
//             className="h-auto rounded-lg"
//           />
//           <h1 className="mt-3 text-black text-base px-2">
//             Best Places to Visit During Summer Vocation in India 2026
//           </h1>
//           <h1 className="text-gray-600 my-1 text-sm px-2 mb-2">
//             Explore the best places to visit during summer vocation in India
//             beaches, hill stations, cities, and calm escapes.
//           </h1>
//         </div>

//         <div className="box1 bg-white rounded-lg w-[85%] sm:w-[45%] lg:w-[25%] shrink-0">
//           <img
//             src="https://www.himalayanglacier.com/wp-content/uploads/2021/12/Taj-Mahal-India.jpg"
//             className="h-auto rounded-lg"
//           />
//           <h1 className="mt-3 text-black text-base px-2">
//             Best Places to Visit During Summer Vocation in India 2026
//           </h1>
//           <h1 className="text-gray-600 my-1 text-sm px-2 mb-2">
//             Explore the best places to visit during summer vocation in India
//             beaches, hill stations, cities, and calm escapes.
//           </h1>
//         </div>

//         <div className="box1 bg-white rounded-lg w-[85%] sm:w-[45%] lg:w-[25%] shrink-0">
//           <img
//             src="https://www.himalayanglacier.com/wp-content/uploads/2021/12/Taj-Mahal-India.jpg"
//             className="h-auto rounded-lg"
//           />
//           <h1 className="mt-3 text-black text-base px-2">
//             Best Places to Visit During Summer Vocation in India 2026
//           </h1>
//           <h1 className="text-gray-600 my-1 text-sm px-2 mb-2">
//             Explore the best places to visit during summer vocation in India
//             beaches, hill stations, cities, and calm escapes.
//           </h1>
//         </div>

//         <div className="box1 bg-white rounded-lg w-[85%] sm:w-[45%] lg:w-[25%] shrink-0">
//           <img
//             src="https://www.himalayanglacier.com/wp-content/uploads/2021/12/Taj-Mahal-India.jpg"
//             className="h-auto rounded-lg"
//           />
//           <h1 className="mt-3 text-black text-base px-2">
//             Best Places to Visit During Summer Vocation in India 2026
//           </h1>
//           <h1 className="text-gray-600 my-1 text-sm px-2 mb-2">
//             Explore the best places to visit during summer vocation in India
//             beaches, hill stations, cities, and calm escapes.
//           </h1>
//         </div>
//       </div>
//     </div>



//        </div>
//         </>
//     )
// }
// export default Homes;



import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Homes = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -sliderRef.current.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  const destinations = Array(8).fill({
    title: "Best Places to Visit During Summer Vacation 2026",
    desc: "Explore the best places to visit in India—beaches, hill stations, and calm escapes.",
    img: "https://www.himalayanglacier.com/wp-content/uploads/2021/12/Taj-Mahal-India.jpg"
  });

  return (
    <div className="space-y-12 py-10">
      {/* --- TOP CATEGORIES SECTION --- */}
      <section className="container mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100 grid lg:grid-cols-3 gap-8 items-center">
          
          {/* Text Content */}
          <div className="space-y-2">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Browse by</span>
            <h2 className="text-5xl font-black text-slate-900 leading-tight">
              Top <br /> <span className="text-blue-600">Categories</span>
            </h2>
            <p className="text-slate-500 font-medium pt-4">Tailored driving experiences for every occasion.</p>
          </div>

          {/* Double Vertical Boxes */}
          <div className="space-y-4">
            <div className="group relative h-48 overflow-hidden rounded-3xl cursor-pointer">
              <img src="https://www.zoomcar.com/img/hompage-rebrand/top-categories/deliver.webp" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Delivery" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <span className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-6 py-2 rounded-xl font-bold text-sm">Delivery</span>
              </div>
            </div>

            <div className="group relative h-48 overflow-hidden rounded-3xl cursor-pointer">
              <img src="https://www.zoomcar.com/img/hompage-rebrand/top-categories/rated.webp" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Rated" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <span className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-6 py-2 rounded-xl font-bold text-sm">Top Rated</span>
              </div>
            </div>
          </div>

          {/* Large Feature Box */}
          <div className="group relative h-full min-h-[400px] overflow-hidden rounded-3xl cursor-pointer">
            <img src="https://www.zoomcar.com/img/hompage-rebrand/top-categories/suv.avif" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="SUV" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
               <p className="text-white/80 font-bold text-sm mb-1 uppercase tracking-widest">Adventure Ready</p>
               <h3 className="text-3xl font-black text-white mb-4">Budget SUV</h3>
               <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-colors">View All</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRAVEL DESTINATION SLIDER --- */}
      <section className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-black text-slate-900">Travel Destinations</h2>
            <div className="h-1 w-12 bg-blue-600 rounded-full mt-2" />
          </div>
          
          <div className="flex gap-2">
            <button onClick={scrollLeft} className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
              <FiChevronLeft size={24} />
            </button>
            <button onClick={scrollRight} className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth pb-4"
        >
          {destinations.map((item, i) => (
            <div key={i} className="w-[300px] md:w-[350px] shrink-0 group cursor-pointer">
              <div className="relative h-56 overflow-hidden rounded-[2rem] mb-4">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Destination" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors px-1">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm mt-2 line-clamp-2 px-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homes;