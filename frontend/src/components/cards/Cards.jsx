import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardContent, Typography } from "@mui/material";

function Cards() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching API Data...");
        
        const response = await axios.get(
          "http://3.111.196.92:8020/api/v1/sample_assignment_api_1/",
          {
            headers: {
              "Accept": "application/json",
              "Authorization": "Basic " + btoa("trial:assignment123"),
            },
          }
        );

        console.log("API Response:", response.data);
        setData(response.data); 

      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data.");
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      {error ? (
        <Typography color="error">{error}</Typography>
      ) : data ? (
        [
          { title: "Purchases", value: data.purchases },
          { title: "Revenue", value: `$${data.revenue}` },
          { title: "Refunds", value: `$${data.refunds}` },
        ].map((item, index) => (
          <Card
            key={index}
            sx={{
              flex: "1 1 200px",
              minWidth: "200px",
              height: 80,
              borderRadius: "12px",
              boxShadow: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              transition: "0.3s ease-in-out",
              "&:hover": {
                boxShadow: 5,
                transform: "scale(1.05)",
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight="normal" textAlign="center">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="center">
                {item.value}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Box>
  );
}

export default Cards;
