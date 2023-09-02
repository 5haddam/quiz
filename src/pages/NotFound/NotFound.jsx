import React from 'react';
import classes from './NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>404 - Page Not Found</h1>
      <p className={classes.description}>The page you are looking for does not exist.</p>
      <Link to={'/'} className={classes.toMainPageLink}>
      <h2 className={classes.toMainPage}>Go to MainPage</h2>
      </Link>
    </div>
  );
};

export default NotFound;
