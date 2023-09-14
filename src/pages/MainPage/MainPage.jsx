import React, { useState, useEffect, useCallback } from 'react';
import controller from '../../API/controller';
import { API } from '../../API/API';
import Loader from '../../components/Loader/Loader';
import ToggleViewMode from '../../components/ToggleViewMode/ToggleViewMode';
import { CenteredText, MainDiv } from './styled';
import Quizzes from '../../components/Quizzes/Quizzes';
import Search from '../../components/Search/Search';

const MainPage = () => {
  const [data, setData] = useState(null);
  const [quizzes, setQuizzes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState(localStorage.getItem('view') || 'list');
  const [searchParams, setSearchParams] = useState('');

  const handleChangeView = (event, nextView) => {
    if (nextView !== null) setView(nextView);
  };

  const fetchData = useCallback(() => {
    const fetchingData = async () => {
      try {
        const result = await controller(`${API}/quizzes`);
        setData(result);
        setIsLoading(false);
        setQuizzes(result);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    fetchingData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    localStorage.setItem('view', view);
  }, [view]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    data && setQuizzes(data.filter((item) => `${item.title}${item.categories}`.replaceAll(' ', '').toLowerCase()
      .includes(searchParams.replaceAll(' ', '').toLowerCase())));
  }, [searchParams]);

  return (
    <MainDiv>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CenteredText>Choose your quiz!!!</CenteredText>
          <Search searchParams={searchParams} setSearchParams={setSearchParams} />
          <ToggleViewMode view={view} handleChangeView={handleChangeView} />
          <Quizzes quizzes={quizzes} viewMode={view} setSearchParams={setSearchParams} />
        </>
      )}
    </MainDiv>
  );
};

export default MainPage;
