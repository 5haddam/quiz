import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import {
  ButtonWrapper, LinkContainer, SignInFormWrapper, StyledLink,
} from './styled';
import thunks from '../../store/services/userInfo/thunks';
import getBase64 from '../../API/getBase64';
import FileField from '../../components/FileField/FileField';

const SignUpPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const [emailError, setEmailError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [repeatedPasswordError, setRepeatedPasswordError] = useState(false);
  const [selectedFileError, setSelectedFileError] = useState(false);

  const [emailErrorText, setEmailErrorText] = useState('');
  const [userNameErrorText, setUserNameErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const [repeatedPasswordErrorText, setRepeatedPasswordErrorText] = useState('');
  const [selectedFileText, setSelectedFileText] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const [isDispatchIsPossible, setIsDispatchIsPossible] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isMobile } = useSelector((state) => (state.viewModeReducer));
  const { isAuth, usersData } = useSelector((state) => state.userInfoReducer);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const redirectToMainPage = () => {
    if (isAuth) navigate('/');
  };

  const getAvatar = async () => {
    if (selectedFile && selectedFile.size < 80000) {
      const avatar = await getBase64(selectedFile);
      return avatar;
    }
    return imageURL;
  };

  const resetErrors = () => {
    setUserNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setRepeatedPasswordError(false);
    setUserNameErrorText('');
    setEmailErrorText('');
    setPasswordErrorText('');
    setRepeatedPasswordErrorText('');
  };

  const checkEmail = () => {
    if (!email.includes('@')) {
      return false;
    }
    const [username, domain] = email.split('@');
    if (username.length === 0 || domain.length === 0) {
      return false;
    }
    if (!domain.includes('.')) {
      return false;
    }
    if (domain.startsWith('.') || domain.endsWith('.')) {
      return false;
    }
    return true;
  };

  const fetchQuizzesList = useCallback(async () => {
    try {
      await dispatch(thunks.fetchUsersData());
      setIsLoading(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, []);

  const createUser = useCallback(async (body) => {
    try {
      await dispatch(thunks.createUser(body));
      setIsLoading(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchQuizzesList();
  }, [fetchQuizzesList]);

  useEffect(() => {
    redirectToMainPage();
  }, [isAuth]);

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
    if (userName && email && password && repeatedPassword) {
      setIsDispatchIsPossible(true);
    } else {
      setIsDispatchIsPossible(false);
    }
  }, [isLoading, userName, email, password, repeatedPassword]);

  const signUpValidityCheck = () => {
    resetErrors();
    let anyErrorsPresent = false;
    if (password.includes(' ')) {
      anyErrorsPresent = true;
      setPasswordError(true);
      setPasswordErrorText('Password must not contain a space');
    } else if (password.length < 8) {
      anyErrorsPresent = true;
      setPasswordError(true);
      setPasswordErrorText('Password must be at least 8 characters long');
    } else if (password !== repeatedPassword) {
      setPasswordError(true);
      anyErrorsPresent = true;
      setRepeatedPasswordError(true);
      setRepeatedPasswordErrorText('Passwords must match');
    }
    if (userName.includes(' ')) {
      anyErrorsPresent = true;
      setUserNameError(true);
      setUserNameErrorText('UserName must not contain a space');
    }
    if (!checkEmail()) {
      anyErrorsPresent = true;
      setEmailError(true);
      setEmailErrorText('Email is invalid');
    }
    if (selectedFile && selectedFile.size > 80000) {
      anyErrorsPresent = true;
    }
    if (!anyErrorsPresent) {
      usersData.forEach((user) => {
        if (user.email === email) {
          anyErrorsPresent = true;
          setEmailError(true);
          setEmailErrorText('Email is already taken');
        }
        if (user.name === userName) {
          anyErrorsPresent = true;
          setUserNameError(true);
          setUserNameErrorText('UserName is already taken');
        }
      });
      if (!anyErrorsPresent) {
        (async () => {
          const body = {
            name: userName,
            email,
            password,
            avatar: await getAvatar(),
          };

          createUser(body);
          setIsSending(true);
        })();
      }
    }
  };

  return (
    <>
      <SignInFormWrapper>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            margin: `auto ${isMobile ? '60px' : '100px'}`,
            width: '320px',
            height: '590px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <LinkContainer><p>Already have an account? <StyledLink to='/login'>Login</StyledLink></p></LinkContainer>
          <TextField
            label="UserName"
            value={userName}
            onChange={(e) => setUserName(e.target.value.trim())}
            sx={{ marginBottom: '25px' }}
            error={userNameError}
            helperText={userNameErrorText}
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            sx={{ marginBottom: '25px' }}
            error={emailError}
            helperText={emailErrorText}
          />
          <TextField
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
            sx={{ marginBottom: '25px' }}
            error={passwordError}
            helperText={passwordErrorText}
          />
          <TextField
            label="Repeat password"
            type="password"
            autoComplete="current-password"
            value={repeatedPassword}
            onChange={(e) => setRepeatedPassword(e.target.value.trim())}
            sx={{ marginBottom: '25px' }}
            error={repeatedPasswordError}
            helperText={repeatedPasswordErrorText}
          />
          <FileField
            handleFileChange={handleFileChange}
            selectedFile={selectedFile}
            imageURL={imageURL}
            setImageURL={setImageURL}
            selectedFileError={selectedFileError}
            selectedFileText={selectedFileText}
          />
          <ButtonWrapper>
            <LoadingButton
              onClick={signUpValidityCheck}
              loading={isDispatchIsPossible && (isSending || isLoading)}
              variant="contained"
              disabled={!isDispatchIsPossible}
              sx={{ width: '110px' }}
            >
              <span>sign up</span>
            </LoadingButton>
          </ButtonWrapper>
        </Box>
      </SignInFormWrapper>
    </>
  );
};

export default SignUpPage;
