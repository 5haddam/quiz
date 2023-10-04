import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box, Button,
} from '@mui/material';
import { useSelector } from 'react-redux';
import InputText from '../InputText/InputText';
import { quizRules } from '../../utils/constants';
import {
  CreateQuestionDiv,
  QuestionWrapper,
  StyledDivider,
} from './styled';
import OptionInput from '../OptionInput/OptionInput';

const CreateQuestionForm = ({
  addQuestionToArray,
  question,
  index,
}) => {
  const [isCreated, setIsCreated] = useState(false);
  const { isMobile } = useSelector((state) => (state.viewModeReducer));
  const {
    control, handleSubmit, watch, setValue, trigger,
  } = useForm({
    defaultValues: {
      question: question?.question ? question.question : '',
      type: question?.type ? question.type : '',
      options: question?.options ? question.options : [{ option: '', isRight: false }],
    },
  });

  const onSubmit = (data) => {
    const filteredOptions = data.options.filter(({ option }) => option.length >= 2);
    let trueCheckBoxCounter = 0;
    data.options.forEach(({ isRight }) => {
      if (isRight) {
        trueCheckBoxCounter += 1;
      }
    });
    const type = trueCheckBoxCounter === 1 ? 'oneAnswer' : 'fewAnswers';
    addQuestionToArray({ ...data, options: filteredOptions, type }, index);
    setIsCreated(true);
  };

  return (
    <>
      <StyledDivider />
      <CreateQuestionDiv sx={isMobile && { flexDirection: 'column' }}>
        <QuestionWrapper sx={isMobile && { maxWidth: '768px' }}>
          <InputText
            fullWidth
            control={control}
            name='question'
            rules={quizRules.title}
            sx={{ margin: '0' }}
            label='Enter question'
          />
          {watch('options').map((option, index) => (
            <OptionInput
              option={option}
              index={index}
              key={index}
              control={control}
              watch={watch}
              setValue={setValue}
              trigger={trigger}
            />
          ))}
        </QuestionWrapper>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            flexDirection: isMobile ? 'row' : 'column',
            marginTop: isMobile ? '25px' : '0',
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSubmit)}
            sx={{ width: '130px' }}
          >
            {isCreated ? 'Update' : 'Add Issue'}
          </Button>
        </Box>
      </CreateQuestionDiv>
    </>
  );
};

export default CreateQuestionForm;
