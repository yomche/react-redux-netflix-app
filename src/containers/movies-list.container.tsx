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

export const MoviesListContainer: FC = () => {
  const { moviesData, movieSortType } = useSelector((state: RootState) => ({
    moviesData: state.moviesData.get('movies'),
    movieSortType: state.sortTypeData,
  }));
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

  useEffect(() => {
    const inputSearchRequest = new URLSearchParams(location.search).get('search');
    if (inputSearchRequest !== null) {
      const searchTypeRequest = new URLSearchParams(location.search).get('searchBy');
      dispatch(fetchMoviesByInputValue(movieSortType, inputSearchRequest, searchTypeRequest));
    } else {
      dispatch(fetchMovies());
    }
  }, []);

  return <MoviesList onSetMovieFullInfoType={setMovieFullInfoType} moviesData={moviesData} />;
};
