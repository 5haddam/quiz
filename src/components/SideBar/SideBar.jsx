import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { useTheme } from '@mui/material/styles';
import {
  CloseButton, MaterialUISwitch, NavBar, Navigation, NavigationLink, PanelDiv,
} from './styled';
import AuthenticationPanel from '../AuthenticationPanel/AuthenticationPanel';
import ProfilePanel from '../ProfilePanel/ProfilePanel';

const SideBar = ({
  isNavBarOpen, toggleNavBarStatus, toggleTheme, isAuth, data,
}) => {
  const location = useLocation();
  const theme = useTheme();

  useEffect(() => {
    if (isNavBarOpen) toggleNavBarStatus();
  }, [location]);

  return (
    <NavBar
      anchor={'left'}
      open={isNavBarOpen}
      onClose={toggleNavBarStatus}
    >
      <MaterialUISwitch onChange={toggleTheme} checked={theme.palette.mode === 'dark'} />
      <CloseButton onClick={toggleNavBarStatus} >
        <RxCross1 />
      </CloseButton>
      <Navigation>
        <PanelDiv>
          {isAuth
            ? <ProfilePanel data={data} />
            : <AuthenticationPanel />
          }
        </PanelDiv>
        <NavigationLink to="/">
          Main Page
        </NavigationLink>
        <NavigationLink to={isAuth ? '/createquiz' : '/login'}>
          Create New Quiz
        </NavigationLink>
      </Navigation>
    </NavBar>
  );
};

export default SideBar;
