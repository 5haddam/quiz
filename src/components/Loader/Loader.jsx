import React from 'react';
import classes from './Loader.module.css';
import { CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  );
};

export default Loader;