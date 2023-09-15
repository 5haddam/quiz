import { styled } from '@mui/material/styles';

export const ViewModeWrapper = styled('div')((props) => (
  (
    props.viewMode === 'list' && {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    }) || (
    props.viewMode === 'tiles' && {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
    }
  )
));
