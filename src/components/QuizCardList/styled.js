import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export const imageAndRating = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
};

export const ratingStyle = {
  marginTop: '25px',
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

export const Title = styled('h2')(({ theme }) => ({
  fontSize: '24px',
  marginBottom: '10px',
  marginLeft: '5px',
  color: theme.palette.text.link,
}));

export const LinkToQuiz = styled(Link)(() => ({
  textDecoration: 'none',
}));
