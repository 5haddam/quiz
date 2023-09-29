import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  CloseButton, MaterialUISwitch, NavBar, Navigation, NavigationLink, PanelDiv,
} from './styled';
import AuthenticationPanel from '../AuthenticationPanel/AuthenticationPanel';
import ProfilePanel from '../ProfilePanel/ProfilePanel';
import actions from '../../store/services/theme/actions';

const SideBar = ({
  isNavBarOpen, toggleNavBarStatus,
}) => {
  const { isAuth } = useSelector((state) => state.userInfoReducer);
  const location = useLocation();
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isNavBarOpen) toggleNavBarStatus();
  }, [location]);

  const toggleTheme = () => (
    dispatch(actions.toogleCurrentThemeAction())
  );

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
            ? <ProfilePanel />
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
