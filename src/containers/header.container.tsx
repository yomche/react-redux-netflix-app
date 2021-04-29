import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TypeOfView } from '../constants/app.constants';
import { Header } from '../components/header/header.component';
import {
  setViewType,
  fetchMovies,
  setInputValue,
  fetchMoviesByInputValue,
  setToggleBySearchType,
} from '../actions';
import { RootState } from '../store';

export const HeaderContainer: FC = () => {
  const { viewType, currentMovie, movieSortType, movieSearchType } = useSelector(
    (state: RootState) => ({
      viewType: state.viewTypeData,
      currentMovie: state.currentMovieData,
      movieSortType: state.toggleSortTypeData,
      movieSearchType: state.toggleSearchTypeData,
    })
  );
  const dispatch = useDispatch();
  const setMovieListType = useCallback(() => {
    dispatch(setViewType(TypeOfView.movieList));
    dispatch(fetchMovies());
  }, []);

  const setSearchInputValue = useCallback((value) => {
    dispatch(setInputValue(value));
    dispatch(
      fetchMoviesByInputValue(
        movieSortType,
        setInputValue(value).payload.inputValue,
        setInputValue(value).payload.searchType
      )
    );
  }, []);

  const setMovieSearchType = useCallback((type) => {
    dispatch(setToggleBySearchType(type));
  }, []);

  return (
    <Header
      viewType={viewType}
      onSetSearchInputValue={setSearchInputValue}
      currentMovie={currentMovie}
      onSetMovieListType={setMovieListType}
      movieSearchType={movieSearchType}
      onSetMovieSearchType={setMovieSearchType}
    />
  );
};
