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
  fetchMovies,
  setInputValue,
  sethMovieByGenre,
  searchMovieByInputValue,
  setToggleBySortType,
} from '../actions';
import { RootState } from '../store';

export const App: FC = () => {
  const { viewType, currentMovie, moviesData, moviesAmount, movieSortType } = useSelector(
    (state: RootState) => ({
      viewType: state.viewTypeData,
      currentMovie: state.currentMovieData,
      moviesData: state.moviesData.data,
      moviesAmount: state.moviesData.data.length,
      movieSortType: state.toggleSortTypeData,
    })
  );
  const dispatch = useDispatch();
  const setMovieListType = useCallback(() => {
    dispatch(setViewType(TypeOfView.movieList));
    dispatch(fetchMovies());
  }, []);
  const setSortType = useCallback((sortTypeValue) => {
    dispatch(setToggleBySortType(sortTypeValue));
  }, []);
  const setMovieFullInfoType = useCallback(
    (chosenMovie) => () => {
      dispatch(setViewType(TypeOfView.movieFullInfo));
      dispatch(setCurrentMovie(chosenMovie));
      dispatch(sethMovieByGenre(movieSortType, chosenMovie.genre));
    },
    []
  );
  const setSearchInputValue = useCallback((value) => {
    dispatch(setInputValue(value));
    dispatch(
      searchMovieByInputValue(
        movieSortType,
        setInputValue(value).payload.inputValue,
        setInputValue(value).payload.searchType
      )
    );
  }, []);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header
        viewType={viewType}
        onSetSearchInputValue={setSearchInputValue}
        currentMovie={currentMovie}
        onSetMovieListType={setMovieListType}
      />
      <MoviesSorter moviesAmount={moviesAmount} onSetSortType={setSortType} />
      <ErrorBoundaryMoviesList>
        <MoviesList onSetMovieFullInfoType={setMovieFullInfoType} moviesData={moviesData} />
      </ErrorBoundaryMoviesList>
      <Footer />
    </>
  );
};
