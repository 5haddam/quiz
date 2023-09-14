import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import { ThemeProvider } from '@mui/material/styles';
import Template from './components/Template/Template';
import MainPage from './pages/MainPage/MainPage';
import NotFound from './pages/NotFound/NotFound';
import QuizPreview from './pages/QuizPreview/QuizPreview';
import Profile from './pages/Profile/Profile';
import CreateQuizPage from './pages/CreateQuizPage/CreateQuizPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignInPage from './pages/SignInPage/SignInPage';
import StartQuizPage from './pages/StartQuizPage/StartQuizPage';
import { darkModeTheme, lightModeTheme } from './styles/Themes';
import { AppDiv } from './styles/styled';
import controller from './API/controller';
import { userAndCategoriesAPI } from './API/API';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') || false);
  const [data, setData] = useState(null);
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || 'dark');

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', currentTheme);
  };

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const fetchData = useCallback(() => {
    const fetchingData = async () => {
      try {
        const result = await controller(`${userAndCategoriesAPI}/users/2`);
        setData(result);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    fetchingData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData, isAuth]);

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightModeTheme : darkModeTheme} >
      <Router>
        <AppDiv>
          <Routes>
            <Route element={<Template toggleTheme={toggleTheme} isAuth={isAuth} data={data} />}>
              <Route path='/' element={<MainPage />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/quiz/:quizId' element={<QuizPreview />} />
              <Route path='/quiz/start/:quizId' element={<StartQuizPage />} />
              <Route path='/profile' element={<Profile isAuth={isAuth} setIsAuth={setIsAuth} />} />
              <Route path='/createquiz' element={<CreateQuizPage isAuth={isAuth} userData={data} />} />
              <Route path='/login' element={<LoginPage setIsAuth={setIsAuth} />} />
              <Route path='/signin' element={<SignInPage setIsAuth={setIsAuth} />} />
            </Route>
          </Routes>
        </AppDiv>
      </Router>
    </ThemeProvider>
  );
}

export default App;
