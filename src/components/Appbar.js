import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/Button'

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:'#efefef'}} elevation='0' position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2, fontSize:'13px'}}
          >
            <ChatIcon/>Notify
          </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}