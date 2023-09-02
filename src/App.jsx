import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import BlurLayer from './components/BlurLayer/BlurLayer';
import NavBar from './components/NavBar/NavBar';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import NotFound from './pages/NotFound/NotFound';
import QuizPreview from './pages/QuizPreview/QuizPreview';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [auth, setAuth] = React.useState(false); // in the future I plan to make user authorization
  // и ещё, да, я знаю что оно выглядит как из 2007. Надо подумать над дизайном, может прийдет что-то нормальное в голову
  const [isNavBarOpen, setNavBarStatus] = useState(false);

  const toggleNavBarStatus = () => {
    setNavBarStatus(!isNavBarOpen);
  }
  
  return (
    <Router>
      <div className="App">
        <Header toggleNavBarStatus={toggleNavBarStatus} auth={auth} />
        <BlurLayer isNavBarOpen={isNavBarOpen} toggleNavBarStatus={toggleNavBarStatus} />
        <NavBar isNavBarOpen={isNavBarOpen} toggleNavBarStatus={toggleNavBarStatus} />
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route path='*' element={<NotFound />} />
          <Route exact path='/quiz/:quizId' element={<QuizPreview auth={auth} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
