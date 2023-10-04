import { styled } from '@mui/material/styles';

export const ImageAddWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: '240px',
  backgroundColor: `${theme.palette.background.dark}bb`,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '& span': {
    content: '""',
    position: 'absolute',
    width: '20px',
    height: '20px',
    ':nth-of-type(1)': {
      top: '0',
      left: '0',
      borderTop: `2px solid ${theme.palette.text.secondary}80`,
      borderLeft: `2px solid ${theme.palette.text.secondary}80`,
    },
    ':nth-of-type(2)': {
      top: '0',
      right: '0',
      borderTop: `2px solid ${theme.palette.text.secondary}80`,
      borderRight: `2px solid ${theme.palette.text.secondary}80`,
    },
    ':nth-of-type(3)': {
      bottom: '0',
      left: '0',
      borderBottom: `2px solid ${theme.palette.text.secondary}80`,
      borderLeft: `2px solid ${theme.palette.text.secondary}80`,
    },
    ':nth-of-type(4)': {
      bottom: '0',
      right: '0',
      borderBottom: `2px solid ${theme.palette.text.secondary}80`,
      borderRight: `2px solid ${theme.palette.text.secondary}80`,
    },
  },
}));

export const IconAndTextDiv = styled('div')(({ theme }) => ({
  width: '180px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: `${theme.palette.text.secondary}80`,
}));
