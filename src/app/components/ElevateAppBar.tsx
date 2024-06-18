import * as React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavAppBar() {
  return (
    <AppBar component="nav" sx={{ backgroundColor: "white", color: "black", boxShadow: "none"}}>
      <Toolbar>
        <Typography
          variant="h3"
          component="div"
          sx={{ flexGrow: 1, display: { sm: 'block' } }}
        >
          AppName
        </Typography>
        <Button variant="contained" color="primary">결제</Button>
      </Toolbar>
    </AppBar>
  );
}
