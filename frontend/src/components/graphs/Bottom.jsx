import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress } from "@mui/material";

function Bottom() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching Bottom API Data...");

        const response = await axios.get(
          "https://cerebralzip-115l.onrender.com/proxy/api5",
          {
            headers: {
              Accept: "application/json",
              Authorization: "Basic " + btoa("trial:assignment123"),
            },
          }
        );

        console.log("Bottom API Response:", response.data);

        if (
          response.data &&
          response.data.negative !== undefined &&
          response.data.positive !== undefined &&
          response.data.neutral !== undefined
        ) {
          setData(response.data);
        } else {
          console.error("Unexpected API response format:", response.data);
          setError("Invalid API response format.");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" color="red">
        <Typography>{error}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >

<Typography 
        variant="h9" 
        fontWeight="normal" 
        sx={{ textAlign: "center", width: "100%", pl: 2 }}
      >
        Community feedback
      </Typography>
      
      
      <Box 
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3, 
          mb: 4, 
          mt: 2, 
        }}
      >
        <Box textAlign="center">
          <Typography variant="h6" color="red">{data.negative}</Typography>
          <Typography variant="body2">Negative</Typography>
        </Box>
        <Box textAlign="center">
          <Typography variant="h6" color="green">{data.positive}</Typography>
          <Typography variant="body2">Positive</Typography>
        </Box>
        <Box textAlign="center">
          <Typography variant="h6" color="gray">{data.neutral}</Typography>
          <Typography variant="body2">Neutral</Typography>
        </Box>
      </Box>

      
      <Typography 
        variant="h7" 
        fontWeight="normal" 
        sx={{ textAlign: "center", width: "100%", pl: 2 }}
      >
        Mostly positive
      </Typography>
      
    </Box>
  );
}

export default Bottom;
