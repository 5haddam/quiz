import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import CreateQuestionForm from '../CreateQuestionForm/CreateQuestionForm';
import {
  CreateQuizWrapper, StyledDivider, imageGrid, titleAndCategories, ButtonWrapper,
} from './styled';
import ModalFetchImage from '../ModalFetchImage/ModalFetchImage';
import { MaxSizeImage } from '../../styles/styled';
import ImageAddBlock from '../ImageAddBlock/ImageAddBlock';
import InputText from '../InputText/InputText';
import { quizRules } from '../../utils/constants';

const CreateAndEditQuizMain = ({
  onSubmit,
  isLoading = false,
  type = 'create',
  quizData,
  questionsData,
}) => {
  const [image, setImage] = useState(quizData ? quizData.image : '');
  const [questionsArray, setQuestionsArray] = useState(questionsData ? questionsData.questionsArray : ['']);
  const [open, setOpen] = useState(false);
  const {
    control, handleSubmit, getValues,
  } = useForm({
    defaultValues: {
      title: quizData ? quizData.title : '',
      categories: quizData ? quizData.categories : '',
      maxTime: quizData ? quizData.maxTime : 60,
    },
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addQuestionToArray = (questionData, index) => {
    const newQuestionArray = [...questionsArray];
    newQuestionArray[index] = questionData;

    if (!questionsArray[index]) {
      newQuestionArray.push('');
    }

    setQuestionsArray(newQuestionArray);
  };

  const submit = () => {
    const { title, categories, maxTime } = getValues();
    const categoriesArray = categories.split(',').map((category) => category.trim());
    onSubmit({
      quizData: {
        title,
        image,
        categories: categoriesArray,
        rating: [0, 0],
      },
      questionsData: { maxTime, questionsArray: questionsArray.filter((question) => !!question) },
    });
  };

  return (
    <>
      <CreateQuizWrapper>
        <Grid container spacing={3}>
          <Grid item xs={8} sx={titleAndCategories}>
            <InputText
              fullWidth
              control={control}
              name='title'
              rules={quizRules.title}
              sx={{ margin: '0' }}
              label='Quiz title'
            />
            <InputText
              control={control}
              name='maxTime'
              type='number'
              rules={quizRules.time(60)}
              sx={{
                marginTop: '10px',
                width: '100%',
                maxWidth: '200px',
              }}
              label='Enter maxTime'
            />
            <InputText
              fullWidth
              control={control}
              name='categories'
              rules={quizRules.categories}
              sx={{ margin: '0' }}
              label='Categories (category1, category2, ...)'
            />
          </Grid>
          <Grid item xs={4} sx={imageGrid}>
            {image
              ? (<MaxSizeImage src={image} onClick={handleOpen} />)
              : (<ImageAddBlock handleOpen={handleOpen} />)
            }
          </Grid>
        </Grid>
        {questionsArray.map((question, index) => (
          <CreateQuestionForm
            addQuestionToArray={addQuestionToArray}
            question={question}
            key={index}
            index={index}
          />
        ))
        }
        <StyledDivider />
        <ButtonWrapper>
          <LoadingButton
            onClick={handleSubmit(submit)}
            loading={isLoading}
            variant="contained"
            sx={{ width: '130px' }}
          >
            <span>{`${type} Quiz`}</span>
          </LoadingButton>
        </ButtonWrapper>
      </CreateQuizWrapper>
      <ModalFetchImage
        open={open}
        handleClose={handleClose}
        type={'callback'}
        imageAdded={!!image}
        func={(params) => setImage(params)}
      />
    </>
  );
};

export default CreateAndEditQuizMain;
