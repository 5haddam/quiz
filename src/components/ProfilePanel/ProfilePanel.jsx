import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import { StyledAvatar, StyledLink } from './styled';

const ProfilePanel = () => {
  const { userData } = useSelector((state) => state.userInfoReducer);
  const navigate = useNavigate();

  const toProfile = () => {
    navigate('/profile');
  };

  return (
    <>
      {userData
        ? <>
            <StyledAvatar src={userData.avatar} onClick={toProfile} />
            <StyledLink to='/profile'>{userData.name}</StyledLink>
          </>
        : <>
            <Skeleton variant="circular" width={128} height={128} sx={{ marginBottom: '20px' }} />
            <Skeleton variant="rounded" width={120} height={24} />
          </>
      }
    </>
  );
};

export default ProfilePanel;
