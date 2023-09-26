import React, { useCallback, useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import {
  ButtonWrapper, LinkContainer, LoginFormWrapper, StyledLink,
} from './styled';
import actions from '../../store/services/userInfo/actions';
import thunks from '../../store/services/userInfo/thunks';

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [[emailIsError, passwordIsError], setIsErrors] = useState([false, false]);
  const [helperText, setHelperText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isDispatchIsPossible, setIsDispatchIsPossible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, usersData } = useSelector((state) => state.userInfoReducer);

  const redirectToMainPage = () => {
    if (isAuth) navigate('/');
  };

  const fetchUsersList = useCallback(async () => {
    try {
      await dispatch(thunks.fetchUsersData());
      setIsLoading(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchUsersList();
  }, [fetchUsersList]);

  useEffect(() => {
    redirectToMainPage();
  }, [isAuth]);

  useEffect(() => {
    if (login && password) {
      setIsDispatchIsPossible(true);
    } else {
      setIsDispatchIsPossible(false);
    }
  }, [isLoading, login, password]);

  const loginValidityCheck = () => {
    const user = usersData
      .find((item) => (item.email === login || item.name === login) && item.password === password);
    if (user) {
      localStorage.setItem('userId', user.id);
      dispatch(actions.setUserData(user));
      dispatch(actions.isAuthChangeAction(true));
    } else {
      setIsErrors([true, true]);
      setHelperText('Incorrect email or password');
    }
  };

  return (
    <LoginFormWrapper>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          margin: 'auto 100px', width: '320px', height: '320px', display: 'flex', flexDirection: 'column',
        }}
      >
        <LinkContainer><p>Don`t have an account? <StyledLink to='/signup'>SignUp</StyledLink></p></LinkContainer>
        <TextField
          label="Email or login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          sx={{ marginBottom: '25px' }}
          error={emailIsError}
        />
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: '60px' }}
          error={passwordIsError}
          helperText={helperText}
        />
        <ButtonWrapper>
          <LoadingButton
              onClick={loginValidityCheck}
              loading={isDispatchIsPossible && isLoading}
              variant="contained"
              disabled={!isDispatchIsPossible}
              sx={{ width: '110px' }}
            >
              <span>login</span>
            </LoadingButton>
        </ButtonWrapper>
      </Box>
    </LoginFormWrapper>
  );
};

export default LoginPage;
