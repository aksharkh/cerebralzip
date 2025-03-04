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
      {/* Gauge Card */}
      <Card 
        sx={{ 
          flex: 1, 
          borderRadius: '12px', 
          boxShadow: 2, 
          padding: 2 
        }}
      >
        <Guage />
        <Typography variant="h6"   sx={{ mb: 2,textAlign: 'center' }}>
    You're Good!
  </Typography>
        <Typography variant="h9" fontWeight="light"  sx={{ mb: 2,textAlign: 'left' }}>
    Your sales performance score is better than 70% other users.
  </Typography>
      </Card>

      {/* Graph Card */}
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

      {/* Bottom Card (Slightly Smaller) */}
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
