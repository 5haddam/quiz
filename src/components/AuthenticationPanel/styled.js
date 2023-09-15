import { Link } from 'react-router-dom';
import { Divider, styled } from '@mui/material';

export const AuthDiv = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.primary,
}));

export const AuthLinkLeft = styled('p')(() => ({
  textAlign: 'right',
  width: '60px',
  margin: '10px',
}));

export const AuthLinkRight = styled('p')(() => ({
  textAlign: 'left',
  width: '60px',
  margin: '10px',
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '18px',
  textDecoration: 'none',
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.divider,
  height: '40%',
}));
