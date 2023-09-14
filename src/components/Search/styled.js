import { styled } from '@mui/material/styles';

export const StyledTextField = styled('input')(({ theme }) => ({
  borderRadius: '28px',
  width: '100%',
  height: '56px',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  marginTop: '40px',
  fontSize: '19px',
  paddingLeft: '20px',
  outline: 'none',
}));
