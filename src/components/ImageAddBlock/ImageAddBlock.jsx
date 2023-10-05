import React from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useSelector } from 'react-redux';
import { IconAndTextDiv, ImageAddWrapper } from './styled';

const ImageAddBlock = ({ handleOpen }) => {
  const { isMobile } = useSelector((state) => (state.viewModeReducer));

  return (
    <ImageAddWrapper onClick={handleOpen}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <IconAndTextDiv sx={isMobile && { justifyContent: 'center' }}>
        <AddPhotoAlternateIcon sx={{ width: '32px', height: '32px' }} />
        {isMobile || 'Click to add photo'}
      </IconAndTextDiv>
    </ImageAddWrapper>
  );
};

export default ImageAddBlock;
