import React from 'react';
import {
  Rating, Grid, Stack,
} from '@mui/material';
import {
  imageAndRating, ratingStyle, titleAndCategories, categories, Title, LinkToQuiz,
} from './styled';
import { MaxSizeImage, StyledChip } from '../../styles/styled';

const QuizCardList = ({ quiz, setSearchParams }) => {
  const [totalScore, numberOfRatings] = quiz.rating;
  const rating = numberOfRatings >= 1 ? totalScore / numberOfRatings : 0;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={8} sx={titleAndCategories}>
          <LinkToQuiz to={`quiz/${quiz.id}`}>
            <Title>{quiz.title}</Title>
          </LinkToQuiz>
          <Stack direction="row" sx={categories}>
            {quiz.categories.map((category, index) => (
              <StyledChip key={index} label={category} variant="outlined" onClick={() => setSearchParams(category)}/>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={4} sx={imageAndRating}>
          <MaxSizeImage src={quiz.image} />
          <Rating name="half-rating-read" sx={ratingStyle} defaultValue={rating} precision={0.1} readOnly />
        </Grid>
      </Grid>
    </div>
  );
};

export default QuizCardList;
