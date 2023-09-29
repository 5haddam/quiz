import { Avatar, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const ProfileWrapper = styled('div')(() => ({
  width: '100%',
  padding: '20px',
  maxWidth: '1000px',
  margin: '75px auto',
}));

export const ButtonWrapper = styled('div')(() => ({
  width: '100%',
  margin: '10px 0',
  display: 'flex',
  justifyContent: 'end',
}));

export const UserInfoDiv = styled('div')(() => ({
  width: '100%',
  height: '180px',
  display: 'flex',
}));

export const OwnQuizzesDiv = styled('div')(({ theme }) => ({
  width: '100%',
  color: theme.palette.text.primary,
  fontSize: '18px',
  display: 'flex',
  flexWrap: 'wrap',
}));

export const PrimaryP = styled('p')(({ theme }) => ({
  color: theme.palette.text.primary,
  height: '24px',
  fontSize: '20px',
}));

export const SecondaryP = styled('p')(({ theme }) => ({
  color: theme.palette.text.secondary,
  height: '24px',
  fontSize: '14px',
  margin: '4px 0 10px 0',
}));

export const StyledAvatar = styled(Avatar)(() => ({
  width: '160px',
  height: '160px',
  borderRadius: '50%',
  marginBottom: '20px',
  cursor: 'pointer',
}));

export const UserName = styled('p')(({ theme }) => ({
  color: theme.palette.text.primary,
  height: '24px',
  fontSize: '20px',
  textDecoration: 'none',
  margin: '5px 0 0 20px',
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'underline',
  fontSize: '18px',
  color: theme.palette.text.primary,
}));

export const StyledDivider = styled(Divider)(() => ({
  margin: '20px 0',
}));
