import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import axios from "axios";
import { Box, CircularProgress, Typography } from "@mui/material";

function Graph() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching Graph API Data...");

        const response = await axios.get(
          "https://cerebralzip-115l.onrender.com/proxy/api4",
          {
            headers: {
              "Accept": "application/json",
              "Authorization": "Basic " + btoa("trial:assignment123"),
            },
          }
        );

        console.log("Graph API Response:", response.data);

        if (Array.isArray(response.data) && response.data.length > 0) {
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
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
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

 
  const xLabels = data.map((item) => item.date2); 
  const uniqueCountData = data.map((item) => item.unique_count);
  const cumulativeTweetsData = data.map((item) => item.cumulative_tweets);

  return (
    <LineChart
    width={300}
    height={200}
    series={[
      { data: uniqueCountData, label: "Unique Count", color: "#B0EDFB", strokeWidth: 1, opacity: 0.6 },
      { data: cumulativeTweetsData, label: "Cumulative Tweets", color: "#0068F7", strokeWidth: 1, opacity: 0.6 },
    ]}
    
  />
  );
}

export default Graph;
