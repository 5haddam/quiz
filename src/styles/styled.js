import { styled } from '@mui/material/styles';
import { Chip } from '@mui/material';

export const MaxSizeImage = styled('img')(() => ({
  marginTop: '10px',
  maxWidth: '100%',
  maxHeight: '100%',
}));

export const StyledChip = styled(Chip)(({ theme }) => ({
  marginRight: '8px',
  color: theme.palette.text.default,
  borderColor: theme.palette.divider,
}));

export const AppDiv = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateColumns: '100%',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));
