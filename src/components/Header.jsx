import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { BiLogIn } from 'react-icons/bi'
import { Link } from 'react-router-dom';

export default function Header({ toggleNavBarStatus, auth }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        position: "fixed",
        backdropFilter: "blur(5px)",
        zIndex: "999"
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="#000000"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleNavBarStatus}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
          {auth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="#000000"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={!!anchorEl}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Create Quiz</MenuItem>
              </Menu>
            </div>
          ) : (
            <Link to="/login">
              <IconButton
                style={{ width: "48px", height: "48px", color: "#000000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px"}}
              >
                <BiLogIn />
              </IconButton>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}