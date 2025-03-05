import React from 'react';
import { Card, CardContent } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Maindash from '../components/Maindash';
import Rightside from '../components/Rightside';
import Box from '@mui/material/Box';

function Main() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', background: '#A9AFBB' }}>
      <Card sx={{ 
        backgroundColor: '#E4E8EA',
        height: '97%',
        width: '97%',
        borderRadius: '16px', 
        boxShadow: 3,
        display: 'flex',
        overflow: 'hidden'  // Prevents internal overflow issues
      }}>
        <CardContent sx={{ display: 'flex', width: '100%', height: '100%', padding: 0 }}>

          {/* Sidebar - Fixed width */}
          <Box sx={{ width: '200px', flexShrink: 0, height: '100%' }}>
            <Sidebar />
          </Box>

          {/* Main Dashboard - Takes up most of the space */}
          <Box sx={{ flexGrow: 1, overflow: 'auto', padding: 2,maxHeight: '100%', }}>
            <Maindash />
          </Box>

          {/* Right Side - Fixed width, prevents it from expanding */}
          <Box sx={{ 
            width: '400px', 
            flexShrink: 0, 
            maxheight: '100%', 
            overflow: 'auto',
            padding: 2 // Adds spacing to the top
          }}>
            <Rightside />
          </Box>

        </CardContent>
      </Card>
    </div>
  );
}

export default Main;
