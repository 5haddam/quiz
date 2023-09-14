import { styled } from '@mui/material/styles';

export const QuizStartDiv = styled('div')(() => ({
  width: '100%',
  padding: '20px',
  maxWidth: '1000px',
  margin: '75px auto',
}));

export const Title = styled('h1')(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '10px',
}));

export const titleGrid = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
};

export const imageGrid = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
};
