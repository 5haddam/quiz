import { styled } from '@mui/material/styles';

export const StartRatingContainer = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '10px 0',
}));

export const Title = styled('h1')(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '10px',
}));

export const imageGrid = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
};

export const titleAndCategories = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
};

export const categories = {
  width: '100%',
  flexWrap: 'wrap',
};

export const divider = {
  margin: '25px 0',
};
