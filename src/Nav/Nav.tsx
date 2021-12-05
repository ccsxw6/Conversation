import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavMenu from "./NavMenu";
import LoginIcon from '@mui/icons-material/Login';

// DRY - use state to render each button's info instead of writing it out thirty times!!!!

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavMenu />
          <Button 
              style={{
              fontSize: 20, 
              color: "white"
            }}
            variant="text" 
            href="/admin"
            >
            Admin
          </Button>
          <Button 
              style={{
              fontSize: 20, 
              color: "white"
            }}
            variant="text" 
            href="/"
            >
            Home
          </Button>
          <Button 
              style={{
              fontSize: 20, 
              color: "white"
            }}
            variant="text" 
            href="/menu"
            >
            Menu
          </Button>

           <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            Hi-Mountain
           </Typography>

          <Button 
            style={{
              fontSize: 20, 
              color: "white"
            }}
            startIcon={<LoginIcon />}
            size="medium"
            variant="text"
            >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
