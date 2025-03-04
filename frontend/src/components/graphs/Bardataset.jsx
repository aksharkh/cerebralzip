import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { Box } from '@mui/material';
import { Button, Typography } from '@mui/material';

const dataset = [
  { month: 'Jan', london: 78, paris: 50, newYork: 90, seoul: 60 },
  { month: 'Feb', london: 60, paris: 45, newYork: 80, seoul: 55 },
  { month: 'Mar', london: 85, paris: 55, newYork: 100, seoul: 70 },
  { month: 'Apr', london: 70, paris: 50, newYork: 95, seoul: 65 },
  { month: 'May', london: 90, paris: 60, newYork: 110, seoul: 75 }
];

const valueFormatter = (value) => `${value} mm`;

const chartSetting = {
  yAxis: [
    {
      label: '',
    },
  ],
  width: 600,
  height: 250,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};

function Bardataset() {
  return (
    // <Box sx={{ width: '100%', overflowX: 'auto', maxWidth: '100%' }}>
    //   <BarChart
    //     dataset={dataset}
    //     xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
    //     series={[
    //       { dataKey: 'london', label: 'London', valueFormatter },
    //       { dataKey: 'paris', label: 'Paris', valueFormatter },
    //       { dataKey: 'newYork', label: 'New York', valueFormatter },
    //       { dataKey: 'seoul', label: 'Seoul', valueFormatter },
    //     ]}
    //     {...chartSetting}
    //   />
    // </Box>


<Box sx={{ padding: 1, borderRadius: 2, height: 200 }}>
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} mt={1}>
        <Typography variant="h6" fontWeight="bold">Comparison</Typography>
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
          6 Months
        </Button>
      </Box>

      {/* Data Grid */}
      <Box sx={{ height: 150, width: '100%' }}>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[
          { dataKey: 'london', label: 'Last year', valueFormatter, color: '#B0EDFB',barWidth: 10 },
          { dataKey: 'paris', label: 'This year', valueFormatter , color: '#0068F7',barWidth: 0.2},
        ]}
        
         {...chartSetting}
       />
      </Box>
    </Box>
  );
}

export default Bardataset;
