import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import StarIcon from '@mui/icons-material/Star';

const columns = [
  { field: 'productName', headerName: 'Product Name', width: 160 },
  { field: 'unitsSold', headerName: 'Units Sold', width: 120, type: 'number' },
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

const rows = [
  { id: 1, productName: 'Laptop', unitsSold: 150, revenue: 45000, rating: 4 },
  { id: 2, productName: 'Smartphone', unitsSold: 200, revenue: 60000, rating: 5 },
  { id: 3, productName: 'Tablet', unitsSold: 100, revenue: 25000, rating: 3 },
  { id: 4, productName: 'Smartwatch', unitsSold: 120, revenue: 18000, rating: 4 },
  { id: 5, productName: 'Headphones', unitsSold: 300, revenue: 24000, rating: 5 },
];

function ReviewTable() {
  return (
    <Box sx={{ padding: 1, borderRadius: 2, height: 200 }}>
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
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          hideFooter
          rowHeight={40}  
          sx={{
            backgroundColor: 'transparent',  // Transparent table background
            border: 'none',                  // Remove grid border
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',          // Remove cell borders
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: 'transparent', // Remove column header background
            },
            '& .MuiDataGrid-root': {
              backgroundColor: 'transparent', // Ensure root is transparent
            }
          }}
        />
      </Box>
    </Box>
  );
}

export default ReviewTable;
