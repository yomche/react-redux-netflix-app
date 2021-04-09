import { viewType, currentMovie, fetchSuccess } from './action-types';
import { currentMovieType, moviesDataType, moviesUrl } from '../constants/app.constants';

type actionViewType = {
  type: string;
  payload: string;
};

export function setViewType(payload: string): actionViewType {
  return { type: viewType, payload };
}

type actionCurrentMovie = {
  type: string;
  payload: currentMovieType;
};

export function setCurrentMovie(payload: currentMovieType): actionCurrentMovie {
  return { type: currentMovie, payload };
}

type actionMoviesSuccess = {
  type: string;
  payload: moviesDataType;
};

export function setMoviesSuccess(payload: moviesDataType): actionMoviesSuccess {
  return { type: fetchSuccess, payload };
}

export const fetchMovies = () => (dispatch: (actionCreator: actionMoviesSuccess) => void): void => {
  fetch(moviesUrl)
    .then((response) => response.json())
    .then((moviesData) => {
      dispatch(setMoviesSuccess(moviesData));
    });
};
