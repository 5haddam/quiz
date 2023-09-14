import React from 'react';
import {
  Container, Description, Title, ToMainPage, ToMainPageLink,
} from './styled';

const NotFound = () => (
  <Container>
    <Title>404 - Page Not Found</Title>
    <Description>The page you are looking for does not exist.</Description>
    <ToMainPageLink to={'/'}>
      <ToMainPage>Go to MainPage</ToMainPage>
    </ToMainPageLink>
  </Container>
);

export default NotFound;
