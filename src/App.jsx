import React, { useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import Template from './components/Template/Template';
import MainPage from './pages/MainPage/MainPage';
import NotFound from './pages/NotFound/NotFound';
import QuizPreview from './pages/QuizPreview/QuizPreview';
import Profile from './pages/Profile/Profile';
import CreateQuizPage from './pages/CreateQuizPage/CreateQuizPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import StartQuizPage from './pages/StartQuizPage/StartQuizPage';
import { darkModeTheme, lightModeTheme } from './styles/Themes';
import { AppDiv } from './styles/styled';
import thunks from './store/services/userInfo/thunks';
import actions from './store/services/userInfo/actions';
import { viewModeActions } from './store/services/viewMode';

function App() {
  const { currentTheme } = useSelector((state) => state.themeReducer);
  const { isAuth } = useSelector((state) => state.userInfoReducer);

  const dispatch = useDispatch();

  const fetchUserData = useCallback(async () => {
    const userId = localStorage.getItem('userId') || 0;
    try {
      if (userId) {
        await dispatch(thunks.fetchUserData(userId));
      } else {
        dispatch(actions.isAuthChangeAction(false));
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      dispatch(viewModeActions.toogleViewModeAction(window.innerWidth < 768));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isAuth) fetchUserData();
  }, [fetchUserData]);

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightModeTheme : darkModeTheme} >
      <Router>
        <AppDiv>
          <Routes>
            <Route element={<Template />}>
              <Route path='/' element={<MainPage />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/quiz/:quizId' element={<QuizPreview />} />
              <Route path='/quiz/start/:quizId' element={<StartQuizPage />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/createquiz' element={<CreateQuizPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignUpPage />} />
            </Route>
          </Routes>
        </AppDiv>
      </Router>
    </ThemeProvider>
  );
}

export default App;
