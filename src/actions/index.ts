import {
  viewTypeAction,
  currentMovieAction,
  updateFormStateAction,
  fetchSuccessAction,
  fetchSortByDateAction,
  fetchSortByRatingAction,
} from './action-names';
import { moviesUrl, moviesUrlSortByDate, moviesUrlSortByRating } from '../constants/app.constants';
import { CurrentMovieType, MoviesDataType } from '../types';

type ActionViewType = {
  type: string;
  payload: string;
};

export function setViewType(payload: string): ActionViewType {
  return { type: viewTypeAction, payload };
}

type ActionCurrentMovie = {
  type: string;
  payload: CurrentMovieType;
};

export function setCurrentMovie(payload: CurrentMovieType): ActionCurrentMovie {
  return { type: currentMovieAction, payload };
}

export const updateFormState = (form: any, state: any) => ({
  type: updateFormStateAction,
  form,
  payload: state,
});

type ActionMoviesSuccess = {
  type: string;
  payload: MoviesDataType;
};

export function setMoviesSuccess(payload: MoviesDataType): ActionMoviesSuccess {
  return { type: fetchSuccessAction, payload };
}

export function setMoviesSortByDate(payload: MoviesDataType): ActionMoviesSuccess {
  return { type: fetchSortByDateAction, payload };
}
export function setMoviesSortByRating(payload: MoviesDataType): ActionMoviesSuccess {
  return { type: fetchSortByRatingAction, payload };
}

export const fetchMovies = () => (dispatch: (actionCreator: ActionMoviesSuccess) => void): void => {
  fetch(moviesUrl)
    .then((response) => response.json())
    .then((moviesData) => {
      dispatch(setMoviesSuccess(moviesData));
    });
};

export const fetchMoviesByDate = () => (
  dispatch: (actionCreator: ActionMoviesSuccess) => void
): void => {
  fetch(moviesUrlSortByDate)
    .then((response) => response.json())
    .then((moviesDataByDate) => {
      dispatch(setMoviesSortByDate(moviesDataByDate));
    });
};

export const fetchMoviesByRating = () => (
  dispatch: (actionCreator: ActionMoviesSuccess) => void
): void => {
  fetch(moviesUrlSortByRating)
    .then((response) => response.json())
    .then((moviesDataByRating) => {
      dispatch(setMoviesSortByRating(moviesDataByRating));
    });
};
