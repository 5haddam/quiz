import React, { useCallback, useEffect, useState } from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  Backdrop, Box, Button, Fade,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useSelector } from 'react-redux';
import FileField from '../FileField/FileField';
import { ButtonsWrapper } from './styled';
import getBase64 from '../../API/getBase64';

const style = {
  position: 'absolute',
  padding: '10px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
  '&:focus-visible': {
    outline: 'none',
  },
};

const ModalFetchImage = ({
  open, handleClose, type, imageAdded, func,
}) => {
  const [imageURL, setImageURL] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileError, setSelectedFileError] = useState(false);
  const [selectedFileText, setSelectedFileText] = useState('');
  const [isDispatchIsPossible, setIsDispatchIsPossible] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const { userData } = useSelector((state) => state.userInfoReducer);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const getAvatar = async () => {
    if (selectedFile) {
      const avatar = await getBase64(selectedFile);
      return avatar;
    }
    return imageURL;
  };

  const changeUserData = useCallback(async (params) => {
    try {
      await func(params);
      setIsSending(false);
      handleClose();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, []);

  const newAvatarValidityCheck = async () => {
    if (imageURL || (selectedFile && selectedFile).size <= 80000) {
      (async () => {
        const body = {
          avatar: await getAvatar(),
        };
        if (type === 'request') {
          changeUserData({ id: userData.id, body });
        } else {
          changeUserData(body.avatar);
        }
        setIsSending(true);
      })();
    }
  };

  useEffect(() => {
    if (!selectedFile) {
      setSelectedFileError(false);
      setSelectedFileText('');
    } else if (selectedFile && selectedFile.size > 80000) {
      setSelectedFileError(true);
      setSelectedFileText('File size exceeds limit (max 100 KB)');
    } else {
      setSelectedFileError(false);
      setSelectedFileText(`Selected file: ${selectedFile.name}`);
    }
  }, [selectedFile]);

  useEffect(() => {
    if (selectedFile || imageURL) {
      setIsDispatchIsPossible(true);
    } else {
      setIsDispatchIsPossible(false);
    }
  }, [selectedFile, imageURL]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <FileField
            handleFileChange={handleFileChange}
            selectedFile={selectedFile}
            imageURL={imageURL}
            setImageURL={setImageURL}
            selectedFileError={selectedFileError}
            selectedFileText={selectedFileText}
          />
          <ButtonsWrapper>
            <Button
              color='error'
              onClick={handleClose}
              variant="contained"
              sx={{ width: '110px' }}
            >
              cancel
            </Button>
            <LoadingButton
              onClick={newAvatarValidityCheck}
              loading={isDispatchIsPossible && isSending}
              variant="contained"
              disabled={!isDispatchIsPossible}
              sx={{ width: '110px' }}
            >
              <span>{imageAdded ? 'Change' : 'Add'}</span>
            </LoadingButton>
          </ButtonsWrapper>
        </Box>
      </Fade>
    </Modal>

  );
};

export default ModalFetchImage;
