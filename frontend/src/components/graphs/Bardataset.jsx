import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box, Typography, Button } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

const chartSetting = {
  
  width: 600,
  height: 250
};

const valueFormatter = (value) => `$${value}`;

function Bardataset() {
  const [dataset, setDataset] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://cerebralzip-115l.onrender.com/api/bardataset")
      .then((res) => res.json())
      .then((data) => {
        console.log("Graph Data Received:", data);
        setDataset(data);
      })
      .catch((error) => {
        console.error("Error fetching bardataset:", error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <Box sx={{ padding: 2, borderRadius: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6" fontWeight="bold">Sales Comparison</Typography>
        <Button variant="contained" sx={{ borderRadius: '12px', fontSize: 12, padding: '4px 8px', backgroundColor: 'transparent', color: 'black',textTransform: 'none', }}>
          Last 6 Months
          <KeyboardArrowDown />
        </Button>
      </Box>

      <BarChart
        dataset={dataset}  
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[
          { dataKey: "lastYear", label: "Last Year", valueFormatter, color: "#B0EDFB", barWidth: 10 },
          { dataKey: "thisYear", label: "This Year", valueFormatter, color: "#0068F7", barWidth: 10 }
        ]}
        {...chartSetting}
      />
    </Box>
  );
}

export default Bardataset;
