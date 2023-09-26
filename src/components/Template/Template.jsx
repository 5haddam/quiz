import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';

const Template = () => {
  const [isNavBarOpen, setNavBarStatus] = useState(false);
  const toggleNavBarStatus = () => {
    setNavBarStatus(!isNavBarOpen);
  };

  return (
    <>
      <Header toggleNavBarStatus={toggleNavBarStatus} />
      <SideBar
        isNavBarOpen={isNavBarOpen}
        toggleNavBarStatus={toggleNavBarStatus}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default Template;
