import React from 'react';
import { CircularProgress } from '@mui/material';
import { LoaderWrapper } from './styled';

const Loader = () => (
  <LoaderWrapper>
    <CircularProgress />
  </LoaderWrapper>
);

export default Loader;
