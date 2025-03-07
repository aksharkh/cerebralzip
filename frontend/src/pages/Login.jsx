import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phone_number: "",
    input_code: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setError(""); 
  
    try {
      console.log("Sending Login Request:", formData);
  
      const response = await axios.post(
        "https://cerebralzip-115l.onrender.com/proxy/login/",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          auth: { username: "trial", password: "assignment123" },
        }
      );
  
      console.log("Full Login Response:", response.data); 
      if (response.data.message === "Successfully Logged in") {
        localStorage.setItem("loginStatus", "true"); 
        navigate("/dashboard"); 
      } else {
        console.error("Unexpected API response:", response.data);
        setError(response.data.message || "Login failed.");
      }
    } catch (err) {
      console.error("Login Error:", err);
  
      if (err.response) {
        console.log("Full Error Response:", err.response.data);
        setError(err.response.data.message || "Login failed. Check credentials.");
      } else {
        setError("Login failed. Server not responding.");
      }
    }
  };
  
  return (
    <Box 
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box 
        sx={{
          width: "100%", 
          maxWidth: 400, 
          p: 4, 
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "white", 
          textAlign: "center" 
        }}
      >
        <Typography variant="h5" mb={2}>Login</Typography>

        <TextField label="Username" name="username" variant="outlined" fullWidth margin="normal" value={formData.username} onChange={handleChange} required />
        <TextField label="Password" name="password" type="password" variant="outlined" fullWidth margin="normal" value={formData.password} onChange={handleChange} required />
        <TextField label="Email" name="email" type="email" variant="outlined" fullWidth margin="normal" value={formData.email} onChange={handleChange} required />
        <TextField label="Phone Number" name="phone_number" type="tel" variant="outlined" fullWidth margin="normal" value={formData.phone_number} onChange={handleChange} required />
        <TextField label="Input Code" name="input_code" variant="outlined" fullWidth margin="normal" value={formData.input_code} onChange={handleChange} required />

        {error && <Typography color="error" mt={1}>{error}</Typography>}

        <Button variant="contained" color="primary" onClick={handleLogin} sx={{ mt: 2, width: "100%" }}>
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
