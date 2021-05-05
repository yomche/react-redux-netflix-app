import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MoviesSorter } from '../components/movies-sorter/movies-sorter.component';
import { setToggleBySortType, fetchMoviesBySortType } from '../actions';
import { RootState } from '../store';

export const MoviesSorterContainer: FC = () => {
  const { moviesAmount, movieSortType } = useSelector((state: RootState) => ({
    moviesAmount: state.moviesData.get('movies'),
    movieSortType: state.toggleSortTypeData,
  }));
  const dispatch = useDispatch();

  const setSortType = useCallback((sortTypeValue) => {
    dispatch(setToggleBySortType(sortTypeValue));
    dispatch(fetchMoviesBySortType(sortTypeValue));
  }, []);

  return (
    <MoviesSorter
      moviesAmount={moviesAmount.length}
      onSetSortType={setSortType}
      movieSortType={movieSortType}
    />
  );
};
