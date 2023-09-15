import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export const LinkqQuizTiles = styled(Link)(({ theme }) => ({
  position: 'relative',
  textDecoration: 'none',
  minHeight: '220px',
  maxHeight: '220px',
  backgroundColor: theme.palette.background.default,
}));

export const QuizTilesImage = styled('img')(() => ({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'cover',
}));

export const QuizTilesDiv = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
}));

export const QuizTitleDiv = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: '-1px',
  left: '-1px',
  padding: '10px',
  margin: '0',
  background: `linear-gradient(to bottom, ${theme.palette.background.default}00 0%,
  ${theme.palette.background.default}80 25%, ${theme.palette.background.default}e6 50%,
  ${theme.palette.background.default}ff 60%, ${theme.palette.background.default}ff 100%)`,
  width: 'calc(100% + 2px)',
  height: '150px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column-reverse',
}));

export const QuizTitle = styled('h2')(({ theme }) => ({
  color: theme.palette.text.primary,
}));
