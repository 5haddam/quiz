import { Link } from 'react-router-dom';
import { Avatar, styled } from '@mui/material';

export const StyledAvatar = styled(Avatar)(() => ({
  width: '128px',
  height: '128px',
  borderRadius: '50%',
  marginBottom: '20px',
  cursor: 'pointer',
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '18px',
  textDecoration: 'none',
}));
