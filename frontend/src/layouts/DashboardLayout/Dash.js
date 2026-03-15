import Footer from "examples/Footer";
import Navbar from "examples/navbar";
const { Outlet } = require("react-router-dom")


const Dash=()=>{
    return(
        <>
    <Navbar/>
    <div style={{ minHeight: "100vh" }}>
        <Outlet/>
    </div>
    <Footer/>
     

        </>
    )
}
export default Dash;