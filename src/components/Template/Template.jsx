import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';

const Template = ({
  toggleTheme, isAuth, data,
}) => {
  const [isNavBarOpen, setNavBarStatus] = useState(false);
  const toggleNavBarStatus = () => {
    setNavBarStatus(!isNavBarOpen);
  };
  return (
    <>
      <Header toggleNavBarStatus={toggleNavBarStatus} isAuth={isAuth} data={data} />
      <SideBar
        isNavBarOpen={isNavBarOpen}
        toggleNavBarStatus={toggleNavBarStatus}
        toggleTheme={toggleTheme}
        isAuth={isAuth}
        data={data}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default Template;
