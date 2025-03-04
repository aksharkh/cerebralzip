import React from 'react'
import { Stack } from '@mui/material'
import { Gauge } from '@mui/x-charts/Gauge';
import { gaugeClasses } from '@mui/x-charts/Gauge';
import Box from '@mui/material/Box';

function Guage() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
      }}
    >
    <Gauge
  value={75}
  startAngle={-110}
  endAngle={110}
  width={120}   // Reduce the width
height={120} 
  sx={{
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 15,
    fontWeight: 'bold',
      transform: 'translate(0px, 0px)',
    },
  }}
  text={
     ({ value, valueMax }) => `${value} / ${valueMax}`
  }
/>
</Box>
  )
}

export default Guage