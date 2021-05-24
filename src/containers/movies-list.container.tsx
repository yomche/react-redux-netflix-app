import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { TypeOfView } from '../constants/app.constants';
import { MoviesList } from '../components/movies-list/movies-list.component';
import {
  setViewType,
  setCurrentMovie,
  fetchMovies,
  fetchMoviesByGenre,
  fetchMoviesByInputValue,
} from '../actions';
import { RootState } from '../store';
import { Loader } from '../components/loader/loader.component';

export const MoviesListContainer: FC = () => {
  const { moviesData, movieSortType, isPageLoading, viewType } = useSelector(
    (state: RootState) => ({
      moviesData: state.moviesData.get('movies'),
      movieSortType: state.sortTypeData,
      isPageLoading: state.loadingStatusData,
      viewType: state.viewTypeData,
    })
  );
  const dispatch = useDispatch();
  const location = useLocation();

  const setMovieFullInfoType = useCallback(
    (chosenMovie) => () => {
      dispatch(setViewType(TypeOfView.movieFullInfo));
      dispatch(setCurrentMovie(chosenMovie));
      dispatch(fetchMoviesByGenre(movieSortType, chosenMovie.genre));
    },
    []
  );

  const inputSearchQuery = new URLSearchParams(location.search).get('search');
  useEffect(() => {
    if (inputSearchQuery !== null) {
      const searchTypeQuery = new URLSearchParams(location.search).get('searchBy');
      dispatch(fetchMoviesByInputValue(movieSortType, inputSearchQuery, searchTypeQuery));
      dispatch(setViewType(TypeOfView.movieList));
    } else if (viewType === TypeOfView.movieList) dispatch(fetchMovies());
  }, [inputSearchQuery]);

  return (
    <>
      {isPageLoading === true ? (
        <Loader />
      ) : (
        <MoviesList onSetMovieFullInfoType={setMovieFullInfoType} moviesData={moviesData} />
      )}
    </>
  );
};
