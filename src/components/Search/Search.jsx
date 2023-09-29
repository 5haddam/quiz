import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledTextField } from './styled';
import actions from '../../store/services/quizzes/actions';

const Search = () => {
  const { filter } = useSelector((state) => state.quizzesReducer);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => {
    dispatch(actions.filterAction(e.target.value));
  };

  return (
    <StyledTextField
      label="Search..."
      onChange={handleChangeFilter}
      value={filter}
      placeholder='Search...'
    />
  );
};

export default Search;
