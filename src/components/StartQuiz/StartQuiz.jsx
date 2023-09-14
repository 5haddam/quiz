import {
  Button, Grid, Rating, Stack,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  StartRatingContainer, Title, categories, imageGrid, titleAndCategories,
} from './styled';
import { MaxSizeImage, StyledChip } from '../../styles/styled';

const StartQuiz = ({ data, rating, quizId }) => (
    <>
      <Grid container spacing={3}>
        <Grid item xs={8} sx={titleAndCategories}>
          <Title>{data.mainData.title}</Title>
          <Stack direction="row" sx={categories}>
            {data.mainData.categories.map((category, index) => (
              <StyledChip key={index} label={category} variant="outlined" />
            ))}
          </Stack>
        </Grid>
        <Grid item xs={4} sx={imageGrid}>
          <MaxSizeImage src={data.mainData.image} />
        </Grid>
      </Grid>
      <StartRatingContainer>
        <Rating name="half-rating-read" defaultValue={rating} precision={0.1} readOnly />
        <Link to={`/quiz/start/${quizId}`}>
          <Button>Start quiz</Button>
        </Link>
      </StartRatingContainer>
    </>
);

export default StartQuiz;
