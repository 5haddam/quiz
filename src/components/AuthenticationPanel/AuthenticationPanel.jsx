import React from 'react';
import { AccountCircle } from '@mui/icons-material';
import {
  AuthDiv, AuthLinkLeft, AuthLinkRight, StyledDivider, StyledLink,
} from './styled';

const AuthenticationPanel = () => (
    <>
      <AccountCircle fontSize='large'/>
      <AuthDiv>
        <AuthLinkLeft><StyledLink to='/login'>LogIn</StyledLink></AuthLinkLeft>
        <StyledDivider orientation="vertical" variant="middle" />
        <AuthLinkRight><StyledLink to='/signin'>Sign In</StyledLink></AuthLinkRight>
      </AuthDiv>
    </>
);

export default AuthenticationPanel;
