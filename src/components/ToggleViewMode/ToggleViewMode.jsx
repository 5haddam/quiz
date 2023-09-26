import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleButtonDiv, ToggleButtonGroupStyle } from './styled';
import actions from '../../store/services/quizzes/actions';

const ToggleViewMode = () => {
  const { view } = useSelector((state) => state.quizzesReducer);
  const dispatch = useDispatch();

  const handleChangeView = (event, nextView) => {
    if (nextView !== null) dispatch(actions.changeViewAction(nextView));
  };
  return (
    <ToggleButtonDiv>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleChangeView}
        sx={ToggleButtonGroupStyle}
      >
        <ToggleButton value="list" aria-label="list">
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value="tiles" aria-label="module">
          <ViewModuleIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </ToggleButtonDiv>
  );
};

export default ToggleViewMode;
