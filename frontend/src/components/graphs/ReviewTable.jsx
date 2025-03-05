import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';

const columns = [
  { field: 'product', headerName: 'Product Name', width: 160 },
  { field: 'soldAmount', headerName: 'Units Sold', width: 120, type: 'number' },
  { field: 'revenue', headerName: 'Revenue ($)', width: 120, type: 'number' },
  {
    field: 'rating',
    headerName: 'Rating',
    width: 120,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" gap={0.5}>
        <StarIcon sx={{ color: '#FFD700', fontSize: 18 }} />
        <Typography variant="body2">{params.value}</Typography>
      </Box>
    ),
  },
];

function ReviewTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviewTable = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/reviewtable");
        const formattedData = response.data.map((item, index) => ({
          id: index + 1, // Assign unique IDs
          product: item.product,
          soldAmount: item.soldAmount,
          revenue: item.revenue,
          rating: item.rating,
        }));
        setRows(formattedData);
      } catch (error) {
        console.error("Error fetching reviewtable data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviewTable();
  }, []);

  return (
    <Box sx={{ padding: 1, borderRadius: 2, height: 250 }}>
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6" fontWeight="bold">Products</Typography>
        <Button 
          variant="contained" 
          sx={{ 
            borderRadius: '12px', 
            fontSize: 12, 
            padding: '4px 8px',
            backgroundColor: 'transparent',
            color: 'black',
            textTransform: 'none',
          }}
        >
          Full Results
        </Button>
      </Box>

      {/* Data Grid */}
      <Box sx={{ height: 150, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          hideFooter
          rowHeight={40}  
          sx={{
            backgroundColor: 'transparent',  
            border: 'none',                  
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',          
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: 'transparent',
            },
            '& .MuiDataGrid-root': {
              backgroundColor: 'transparent',
            }
          }}
        />
      </Box>
    </Box>
  );
}

export default ReviewTable;
