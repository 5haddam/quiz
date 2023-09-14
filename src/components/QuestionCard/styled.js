import { styled } from '@mui/material/styles';

export const Title = styled('h1')(({ theme }) => ({
  fontSize: '19px',
  marginTop: '20px',
  marginBottom: '5px',
  color: theme.palette.text.primary,
}));

export const TitleAndTimer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
