import React, { useEffect, useState } from 'react';
import classes from './NavBar.module.css';
import { RxCross1 } from 'react-icons/rx';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = ({ isNavBarOpen, toggleNavBarStatus }) => {
  const [isVisible, setIsVisible] = useState(isNavBarOpen);

  const handleTransitionEnd = () => {
    !isNavBarOpen && setIsVisible(false);
  };

  useEffect(() => {
    isNavBarOpen && setIsVisible(true);
  }, [isNavBarOpen]);

  const navbarClasses = [classes.navbar];

  isNavBarOpen
  ? navbarClasses.push(classes['slideIn'])
  : navbarClasses.push(classes['slideOut']);

  return (
    isVisible && (
      <div
        className={navbarClasses.join(' ')}
        onTransitionEnd={handleTransitionEnd}
      >
        <IconButton
          variant="text"
          className={classes.closeButton}
          onClick={toggleNavBarStatus}
        >
          <RxCross1 />
        </IconButton>
        <div className={classes.navigation}>
          <Link to="/" className={classes.toMainPage}>
            MainPage
          </Link>
        </div>
      </div>
    )
  );
};

export default NavBar;
