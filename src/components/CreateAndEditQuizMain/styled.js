import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';

export const ButtonWrapper = styled('div')(() => ({
  width: '100%',
  margin: '10px 0',
  display: 'flex',
  justifyContent: 'end',
}));

export const CreateQuizWrapper = styled('div')(() => ({
  width: '100%',
  padding: '20px',
  maxWidth: '1000px',
  margin: '75px auto',
}));

export const StyledDivider = styled(Divider)(() => ({
  margin: '20px 0',
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
