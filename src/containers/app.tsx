import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TypeOfView } from '../constants/app.constants';
import { GlobalStyle } from '../../styles/global-styles';
import { Header } from '../components/header/header.component';
import { MoviesList } from '../components/movies-list/movies-list.component';
import { Footer } from '../components/footer/footer.component';
import { MoviesSorter } from '../components/movies-sorter/movies-sorter.component';
import { ErrorBoundaryMoviesList } from './error-boundary';
import {
  setViewType,
  setCurrentMovie,
  setSearchInputValue,
  fetchMovies,
  fetchMoviesByDate,
  fetchMoviesByRating,
} from '../actions';
import { RootState } from '../store';

export const App: FC = () => {
  const { viewType, currentMovie, moviesData, moviesAmount, searchInputValue } = useSelector(
    (state: RootState) => ({
      viewType: state.viewTypeData,
      currentMovie: state.currentMovieData,
      moviesData: state.moviesData.data,
      moviesAmount: state.moviesData.data.length,
      searchInputValue: state.searchInputValueData,
    })
  );
  const dispatch = useDispatch();
  const setMovieFullInfoType = useCallback(
    (chosenMovie) => () => {
      dispatch(setViewType(TypeOfView.movieFullInfo));
      dispatch(setCurrentMovie(chosenMovie));
    },
    []
  );
  const setMovieListType = useCallback(() => dispatch(setViewType(TypeOfView.movieList)), []);
  const setMovieSortByDate = useCallback(() => dispatch(fetchMoviesByDate()), []);
  const setMovieSortByRating = useCallback(() => dispatch(fetchMoviesByRating()), []);
  const setSearchInputChange = useCallback(
    () => dispatch(setSearchInputValue(searchInputValue)),
    []
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header
        viewType={viewType}
        currentMovie={currentMovie}
        onSetMovieListType={setMovieListType}
        onSetSearchInputChange={setSearchInputChange}
        searchInputValue={searchInputValue}
      />
      <MoviesSorter
        moviesAmount={moviesAmount}
        onSetMovieSortByDate={setMovieSortByDate}
        onSetMovieSortByRating={setMovieSortByRating}
      />
      <ErrorBoundaryMoviesList>
        <MoviesList onSetMovieFullInfoType={setMovieFullInfoType} moviesData={moviesData} />
      </ErrorBoundaryMoviesList>
      <Footer />
    </>
  );
};
