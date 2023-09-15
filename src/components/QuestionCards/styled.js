import { styled } from '@mui/material/styles';

export const QuestionCardDiv = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: '15px',
  borderRadius: '6px',
  marginTop: '10px',
  color: theme.palette.text.primary,
}));

export const QuestionText = styled('h3')(() => ({
  fontSize: '18px',
  marginBottom: '10px',
}));

export const OptionList = styled('ul')(() => ({
  listStyleType: 'none',
  padding: '0',
}));

export const Option = styled('li')(() => ({
  marginLeft: '5px',
}));
