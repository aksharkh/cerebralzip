import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

function Cards() {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 2,
        flexWrap: 'wrap' // Allows cards to wrap on smaller screens
      }}
    >
      {['Sales', 'Revenue', 'Customers'].map((title, index) => (
        <Card
          key={index}
          sx={{
            flex: '1 1 200px', // Allows flexible resizing
            minWidth: '200px', // Prevents cards from becoming too small
            height: 80,
            borderRadius: '12px',
            boxShadow: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            transition: '0.3s ease-in-out',
            '&:hover': {
              boxShadow: 5,
              transform: 'scale(1.05)'
            }
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight="bold" textAlign="center">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              +12% This Month
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Cards;
