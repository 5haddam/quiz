import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { BiLogIn } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  AvatarButton, StyledAppBar, StyledAvatar, StyledIconButton,
} from './styled';

export default function Header({ toggleNavBarStatus }) {
  const { isAuth, userData } = useSelector((state) => state.userInfoReducer);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar>
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
          {isAuth ? (
            <div>
              <Link to='/profile'>
                <AvatarButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="#000000"
                >
                  {userData
                    ? <StyledAvatar src={userData.avatar} />
                    : <Skeleton variant="circular" width={32} height={32} />}
                </AvatarButton>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <StyledIconButton>
                <BiLogIn />
              </StyledIconButton>
            </Link>
          )}
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}
