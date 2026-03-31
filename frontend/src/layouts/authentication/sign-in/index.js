import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import Alert from "@mui/material/Alert";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Layout
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Auth
import { useAuth } from "context/AuthContext";

// Image
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import axios from "axios";
import Swal from "sweetalert2";
import { token } from "stylis";

function Basic() {
  const { login, isAuth } = useAuth();
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email,setEmail]=useState("");
  const [password,setpassword]=useState("");
  const [log,setLog]=useState({})

   if (isAuth) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const token=localStorage.getItem("token")

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      
   const login=await axios.post("https://rentigo-xhqk.onrender.com/user/login",
    form,{
      headers:{
        Authorization:`Bearer ${token}`
      }

    }
     
    
   ); // API call
   setLog(login.data)
   localStorage.setItem("token",login.data.token);
   console.log("saved token",localStorage.getItem("token"))

      navigate("/dashboard", { replace: true });
      Swal.fire({
        title:"Success",
        text:"successfully user login",
        icon:"success"
      })
    } catch (err) {
      setError(err?.response?.data?.message || "Invalid credentials");
      Swal.fire({
        title:"Error!",
        text:"user not login",
        icon:"error"
      })
    } finally {
      setLoading(false);
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>

          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" color="white">
                <FacebookIcon />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" color="white">
                <GitHubIcon />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" color="white">
                <GoogleIcon />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            {error && (
              <MDBox mb={2}>
                <Alert severity="error">{error}</Alert>
              </MDBox>
            )}

            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                name="email"
                fullWidth
                value={form.email}
                onChange={handleChange}
                required
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                name="password"
                fullWidth
                value={form.password}
                onChange={handleChange}
                required
              />
            </MDBox>

            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <MDTypography
                variant="button"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>

            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                type="submit"
                disabled={loading}
              
              >
                {loading ? "Signing in..." : "Sign in"}
              </MDButton>
            </MDBox>

            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/signup"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
