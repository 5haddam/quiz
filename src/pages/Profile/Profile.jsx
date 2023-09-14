import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Profile = ({ isAuth, setIsAuth }) => { // test version
  const navigate = useNavigate();

  const logout = () => {
    if (isAuth) {
      setIsAuth(false);
      navigate('/login');
    }
  };

  return (
    <div className='profile'>
      <Button onClick={logout}>unlog</Button>
    </div>
  );
};

export default Profile;
