import React, { useEffect, useState } from 'react';
import { Box, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import InputText from '../InputText/InputText';
import { AnswerDiv } from './styled';
import { quizRules } from '../../utils/constants';

const OptionInput = ({
  option,
  index,
  control,
  watch,
  setValue,
  trigger,
}) => {
  const [isRemovePosible, setIsRemovePosible] = useState(false);

  const { isMobile } = useSelector((state) => (state.viewModeReducer));

  useEffect(() => {
    if (!(watch('options').length > 3)) {
      setIsRemovePosible(false);
    } else {
      setIsRemovePosible(true);
    }
  }, [watch('options')]);

  const handleOptionChange = (index, value) => {
    const currentOptions = [...watch('options')];
    currentOptions[index].option = value;
    currentOptions[index].isRight = false;
    setValue('options', currentOptions);

    if (index === currentOptions.length - 1 && value !== '') {
      currentOptions.push({});
      setValue('options', currentOptions);
    }
  };

  const handleCheckBoxChange = (index, value) => {
    const currentOptions = [...watch('options')];
    currentOptions[index].isRight = value;
    setValue('options', currentOptions);
  };

  const removeOption = (index) => {
    const currentOptions = [...watch('options')];
    setValue('options', [...currentOptions.slice(0, index), ...currentOptions.slice(index + 1)]);
    trigger();
  };
  return (
    <AnswerDiv>
      <InputText
        control={control}
        name={`options[${index}].option`}
        rules={quizRules.answer(
          !(watch('options').length === index + 1
            && watch('options').length !== 1
            && watch('options').length !== 2
          ),
        )}
        sx={{
          margin: '20px 0 0 0',
          width: '100%',
          maxWidth: '400px',
          marginRight: isMobile && index === watch('options').length - 1 ? '114px' : '0',
        }}
        label='Enter answer'
        value={option?.option ? option.option : ''}
        onChange={(e) => handleOptionChange(index, e.target.value)}
      />
      {index !== watch('options').length - 1
        && <Box sx={{
          height: '56px',
          width: '125px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '20px 0 0 20px',
        }}>
          <Checkbox
            name={`checkBox${option}`}
            onChange={(e) => handleCheckBoxChange(index, e.target.checked)}
            checked={option.isRight}
            value={option.isRight}
            label={option.option}
          />
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => removeOption(index)}
            disabled={!isRemovePosible}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Box>}
    </AnswerDiv>
  );
};

export default OptionInput;
