import React from 'react';
import { Box, Card, Typography, Button } from '@mui/material';
import Cards from './cards/Cards';
import Bardataset from './graphs/Bardataset';
import ReviewTable from './graphs/ReviewTable';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

function Maindash() {
  return (
    <Card 
      sx={{ 
        backgroundColor: '#FFFFFF',
        borderRadius: '16px', 
        boxShadow: 3,
        padding: 2, 
        height: '95%', 
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',  
        
      }}
    >
      
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '10%',  
          width: '100%', 
          paddingBottom: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Dashboard
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body1" color="text.secondary">
            Compare to
          </Typography>
          <Button 
            variant="contained" 
            sx={{
              borderRadius: '12px',
              textTransform: 'none',
              padding: '6px 16px',
              backgroundColor: 'transparent',
              color: 'black',
            }}
          >
            Last year
            <KeyboardArrowDown />
          </Button>
        </Box>
      </Box>

      
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2, 
          flexGrow: 1, 
          width: '100%',
        }}
      >
        
        <Box sx={{ flex: '1 1 20%' }}>  
          <Cards />
        </Box>

        
        <Box sx={{ flex: '1 1 50%' }}>  
          <Bardataset />
        </Box>

        
        <Box sx={{ flex: '1 1 40%' }}>  
          <ReviewTable />
        </Box>
      </Box>
    </Card>
  );
}

export default Maindash;
