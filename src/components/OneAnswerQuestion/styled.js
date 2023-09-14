import { styled } from '@mui/material/styles';

export const LabelForm = styled('p')(({ theme }) => ({
  fontSize: '16px',
  color: theme.palette.text.secondary,
  marginBottom: '12px',
}));

export const ButtonDiv = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
}));
