import React from 'react';
import { StyledTextField } from './styled';

const Search = ({ searchParams, setSearchParams }) => (
  <StyledTextField
    label="Search..."
    onChange={(e) => (setSearchParams(e.target.value))}
    value={searchParams}
    placeholder='Search...'
  />
);

export default Search;
