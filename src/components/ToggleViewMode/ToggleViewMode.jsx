import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { ToggleButtonDiv, ToggleButtonGroupStyle } from './styled';

const ToggleViewMode = ({ view, handleChangeView }) => (
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

export default ToggleViewMode;
