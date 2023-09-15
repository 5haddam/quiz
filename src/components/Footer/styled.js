import { styled } from '@mui/material/styles';

export const FooterWrapper = styled('footer')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.footer,
  color: '#fff',
  padding: '10px 0',
  height: '40px',
}));
