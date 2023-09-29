import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const LoginFormWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ButtonWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));

export const LinkContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '10px',
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'underline',
  color: theme.palette.text.link,
}));
