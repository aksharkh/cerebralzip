import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography, Card, ListItemButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Sidebar() {
  return (
    <Card
      sx={{
        height: '97%',
        width: '97%',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      {/* Company Name */}
      <Typography variant="h5" fontWeight="bold" sx={{ textAlign: 'center', mb: 2 }}>
        Salesway
      </Typography>

      {/* Sidebar List */}
      <List>
        {[
          { icon: <DashboardIcon />, text: 'Dashboard' },
          { icon: <SettingsIcon />, text: 'Settings' },
          { icon: <LogoutIcon />, text: 'Logout' }
        ].map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              width: '80%', // Adjust this value as needed
              
              borderRadius: '12px',
              '&:hover': {
                backgroundColor: 'white',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                '& .MuiListItemIcon-root': { color: '#1976D2' } // Change icon color on hover

              },
            }}
          >
            <ListItemIcon sx={{
      color: 'black',
      minWidth: '35px', // Reduce default spacing
    }}>
              {item.icon}
            </ListItemIcon  >
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>

      {/* Profile Section */}
      <Box sx={{ marginTop: 'auto', textAlign: 'center', pb: 2 }}>
  <List>
    <ListItemButton
      sx={{
        width: '80%', // Adjust width as needed
        display: 'flex',
        flexDirection: 'row', // Change to row for side-by-side layout
        alignItems: 'center',
        justifyContent: 'center', // Center content horizontally
        borderRadius: '12px',
        '&:hover': { backgroundColor: 'white' },
      }}
    >
      <AccountCircleIcon sx={{ fontSize: 40, color: 'black', mr: 1 }} />
      <ListItemText
        primary="Akshar"
        primaryTypographyProps={{ fontSize: '16px', fontWeight: 'bold' }}
      />
    </ListItemButton>
  </List>
</Box>

    </Card>
  );
}

export default Sidebar;
