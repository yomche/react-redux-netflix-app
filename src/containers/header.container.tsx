import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { TypeOfView } from '../constants/app.constants';
import { Header } from '../components/header/header.component';
import {
  setViewType,
  fetchMovies,
  setInputValue,
  fetchMoviesByInputValue,
  setSearchType,
} from '../actions';
import { RootState } from '../store';

export const HeaderContainer: FC = () => {
  const { viewType, currentMovie, movieSortType, movieSearchType } = useSelector(
    (state: RootState) => ({
      viewType: state.viewTypeData,
      currentMovie: state.currentMovieData.get('movie'),
      movieSortType: state.sortTypeData,
      movieSearchType: state.searchTypeData,
    })
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const setMovieListType = useCallback(() => {
    dispatch(setViewType(TypeOfView.movieList));
    dispatch(fetchMovies());
  }, []);

  const setSearchInputValue = useCallback((value) => {
    dispatch(setInputValue(value));
    dispatch(fetchMoviesByInputValue(movieSortType, value.inputValue, value.searchType));
    history.push(
      `/?sortBy=${movieSortType}&sortOrder=desc&search=${value.inputValue}&searchBy=${value.searchType}`
    );
  }, []);

  const setMovieSearchType = useCallback((type) => {
    dispatch(setSearchType(type));
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
