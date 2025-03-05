import React from 'react';
import { Box, Card } from '@mui/material';
import Guage from './graphs/Guage';
import Graph from './graphs/Graph';
import Bottom from './graphs/Bottom';
import Typography from '@mui/material/Typography';


function Rightside() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2, 
        height: '100%' 
      }}
    >
      
      <Card 
        sx={{ 
          flex: 1, 
          borderRadius: '12px', 
          boxShadow: 2, 
          padding: 2 
        }}
      >
        <Guage />
        
      </Card>

      
      <Card 
        sx={{ 
          flex: 1, 
          borderRadius: '12px', 
          boxShadow: 2, 
          padding: 2 
        }}
      >
        <Typography variant="h6" fontWeight="bold" alignItems="left" sx={{ mb: 2,textAlign: 'left' }}>
    Customers by Device
  </Typography>
        <Graph />
      </Card>

     
      <Card 
        sx={{ 
          flex: 0.7, 
          borderRadius: '12px', 
          boxShadow: 2, 
          padding: 2 
        }}
      >
        <Bottom />
      </Card>
    </Box>
  );
}

export default Rightside;
