import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { StyledAvatar, StyledLink } from './styled';

const ProfilePanel = ({ data }) => {
  const navigate = useNavigate();

  const toProfile = () => {
    navigate('/profile');
  };

  return (
    <>
      {data
        ? <>
            <StyledAvatar src={data.avatar} onClick={toProfile} />
            <StyledLink to='/profile'>{data.name}</StyledLink>
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
