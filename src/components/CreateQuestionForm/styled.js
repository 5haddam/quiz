import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CreateQuestionDiv = styled('div')(() => ({
  boxSizing: 'border-box',
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
}));

export const CreateQuestionDivMobile = styled('div')(() => ({
  boxSizing: 'border-box',
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'end',
}));

export const QuestionWrapper = styled('div')(() => ({
  width: '100%',
  maxWidth: '632px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
}));

export const Title = styled('p')(() => ({
  fontSize: '18px',
  marginLeft: '10px',
}));

export const StyledDivider = styled(Divider)(() => ({
  margin: '20px 0',
}));

export const AnswerDiv = styled('div')(() => ({
  width: '520px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
}));
