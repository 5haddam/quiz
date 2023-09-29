import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Button, IconButton, Skeleton,
} from '@mui/material';
// import { AiOutlineCamera } from 'react-icons/ai';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../store/services/userInfo/actions';
import ModalChangeImage from '../../components/ModalChangeImage/ModalChangeImage';
import {
  ButtonWrapper,
  OwnQuizzesDiv,
  PrimaryP,
  ProfileWrapper,
  SecondaryP,
  StyledAvatar,
  StyledDivider,
  StyledLink,
  UserInfoDiv,
  UserName,
} from './styled';

const Profile = () => { // test version
  const { isAuth, userData } = useSelector((state) => state.userInfoReducer);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirectToLoginPage = () => {
    if (!isAuth) navigate('/login');
  };

  useEffect(() => {
    redirectToLoginPage();
  }, [isAuth]);

  const logout = () => {
    if (isAuth) {
      dispatch(actions.isAuthChangeAction(false));
    }
  };

  return (
    <>
      <ProfileWrapper>
        <UserInfoDiv>
          {userData
            ? <>
              <Box sx={{ position: 'relative' }}>
                <StyledAvatar src={userData.avatar} onClick={handleOpen} />
                <IconButton sx={{ position: 'absolute', right: '-15px', bottom: '5px' }} onClick={handleOpen}>
                  <AddAPhotoIcon />
                </IconButton>
              </Box>
              <UserName to='/profile'>{userData.name}</UserName>
            </>
            : <>
              <Skeleton variant="circular" width={160} height={160} sx={{ marginBottom: '20px' }} />
              <Skeleton variant="rounded" width={120} height={26} sx={{ margin: '5px 0 0 20px' }} />
            </>
          }
        </UserInfoDiv>
        {(userData && !!userData.ownQuizzes.length) && (
          <>
            <StyledDivider />
            <PrimaryP>Your quizzes</PrimaryP>
            <SecondaryP>Click on the quiz to edit</SecondaryP>
            <OwnQuizzesDiv>
              {userData.ownQuizzes.map((ownQuiz, index) => (
                <p key={ownQuiz.id}>
                  <StyledLink
                    to={`/quiz/edit/${ownQuiz.id}`}
                  >
                    {ownQuiz.title}
                  </StyledLink>
                  {index + 1 === userData.ownQuizzes.length ? '' : ', '}
                </p>
              ))}
            </OwnQuizzesDiv>
          </>
        )}
        <StyledDivider />
        <ButtonWrapper>
          <Button variant="contained" onClick={logout}>unlog</Button>
        </ButtonWrapper>
      </ProfileWrapper>
      <ModalChangeImage open={open} handleClose={handleClose} />
    </>
  );
};

export default Profile;
