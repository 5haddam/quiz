import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export const Container = styled('div')(() => ({
  textAlign: 'center',
  marginTop: '100px',
}));

export const Title = styled('h1')(({ theme }) => ({
  fontSize: '32px',
  color: theme.palette.text.error,
}));

export const Description = styled('p')(({ theme }) => ({
  fontSize: '19px',
  color: theme.palette.text.secondary,
}));

export const ToMainPage = styled('h2')(({ theme }) => ({
  color: theme.palette.text.primary,
  marginTop: '36px',
  fontSize: '28px',
  textDecoration: 'underline',
}));

export const ToMainPageLink = styled(Link)(() => ({
  textDecoration: 'none',
}));
