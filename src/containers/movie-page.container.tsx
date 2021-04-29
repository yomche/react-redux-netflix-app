import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../store';
import { fetchMovieById } from '../actions';

import { GlobalStyle } from '../../styles/global-styles';
import { StyledHeader } from '../components/header/header.styles';
import { MovieFullInfo } from '../components/movie-full-info/movie-full-info.component';
import { NavPanel } from '../components/nav-panel/nav-panel.component';
import { MoviesSorterContainer } from '../containers/movies-sorter.container';
import { ErrorBoundaryMoviesList } from './error-boundary';
import { MoviesListContainer } from '../containers/movies-list.container';
import { Footer } from '../components/footer/footer.component';

export const MoviePageContainer: FC = () => {
  const { moviesData } = useSelector((state: RootState) => ({
    moviesData: state.moviesData.data,
  }));

  const { movieId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieById(movieId));
  }, [movieId]);

  const currentMovieById = moviesData.find((currentValue, index, arr) => {
    console.log(currentValue.id);
    return currentValue.id == movieId;
  });
  return (
    <>
      <GlobalStyle />
      <StyledHeader>
        <NavPanel />
        <MovieFullInfo currentMovieFullInfo={currentMovieById} />
      </StyledHeader>
      <MoviesSorterContainer />
      <ErrorBoundaryMoviesList>
        <MoviesListContainer />
      </ErrorBoundaryMoviesList>
      <Footer />
    </>
  );
};
