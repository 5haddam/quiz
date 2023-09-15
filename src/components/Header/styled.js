import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { AppBar, Avatar } from '@mui/material';

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: '48px',
  height: '48px',
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.default}db`,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
  position: 'fixed',
  backdropFilter: 'blur(5px)',
  zIndex: '999',
  color: theme.palette.text.primary,
  backgroundImage: 'none',
}));

export const StyledAvatar = styled(Avatar)(() => ({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
}));

export const AvatarButton = styled(IconButton)(() => ({
  width: '48px',
  height: '48px',
  padding: '8px',
}));
