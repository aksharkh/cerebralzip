import React, { useEffect, useState } from "react";
import { Gauge } from "@mui/x-charts/Gauge";
import { gaugeClasses } from "@mui/x-charts/Gauge";
import Box from "@mui/material/Box";
import axios from "axios";
import { Button } from "@mui/material";

function Guage() {
  const [gaugeValue, setGaugeValue] = useState(50); 
  const [title, setTitle] = useState("Loading...");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchGaugeData = async () => {
      try {
        console.log("Fetching Gauge API Data...");

        const response = await axios.get(
          "https://cerebralzip-115l.onrender.com/proxy/api3",
          {
            headers: {
              "Accept": "application/json",
              "Authorization": "Basic " + btoa("trial:assignment123"),
            },
          }
        );

        console.log("Gauge API Response:", response.data);

        if (response.data && response.data.score !== undefined) {
          setGaugeValue(response.data.score);
          setTitle(response.data.title || "Performance Score");
          setMessage(response.data.message || "");
        } else {
          console.error("Unexpected API response format:", response.data);
          setTitle("Invalid Data");
          setMessage("No score available.");
          setGaugeValue(50);
        }
      } catch (err) {
        console.error("Error fetching gauge data:", err);
        setTitle("Error");
        setMessage("Failed to load data.");
        setGaugeValue(50);
      }
    };

    fetchGaugeData();
  }, []);

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
      <Gauge
        value={gaugeValue}
        startAngle={-110}
        endAngle={110}
        width={120}
        height={100}
        sx={{
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 15,
            fontWeight: "bold",
            transform: "translate(0px, 0px)",
          },
        }}
        text={({ value }) => `${value}%`}
      />
      <p style={{ fontSize: "14px", fontWeight: "bold", marginTop: "2px" }}>{title}</p>
      <p style={{ fontSize: "12px", color: "gray" }}>{message}</p>
      <Button 
            variant="contained" 
            sx={{
              borderRadius: '12px',
              textTransform: 'none',
              backgroundColor: 'transparent',
              color: 'black',
            }}
          >
            Last year
            
      </Button>
    </Box>
  );
}

export default Guage;
