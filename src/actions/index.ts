import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store';
import {
  setViewTypeAction,
  setCurrentMovieAction,
  updateSearchInputValueAction,
  fetchSuccessAction,
  setSortTypeAction,
  setSearchTypeAction,
} from './action-names';
import { moviesUrl, TypeOfView } from '../constants/app.constants';
import { CurrentMovieType, MoviesDataType, ResponseType } from '../types';

import { generatedUrlByGenre, generatedUrlBySortType, generatedUrlByInputValue } from '../handlers';

type ActionViewType = {
  type: string;
  payload: string;
};

export function setViewType(viewType: string): ActionViewType {
  return { type: setViewTypeAction, payload: viewType };
}

type ActionCurrentMovie = {
  type: string;
  payload: CurrentMovieType;
};

export function setCurrentMovie(currentMovie: CurrentMovieType): ActionCurrentMovie {
  return { type: setCurrentMovieAction, payload: currentMovie };
}

type ActionInputValue = {
  type: string;
  payload: Record<string, any>;
};

export const setInputValue = (searchInputValue: Record<string, any>): ActionInputValue => ({
  type: updateSearchInputValueAction,
  payload: searchInputValue,
});

type ActionFetchSuccess = {
  type: string;
  payload: MoviesDataType[];
};

export function setMoviesSuccess(moviesList: MoviesDataType[]): ActionFetchSuccess {
  return { type: fetchSuccessAction, payload: moviesList };
}

export const fetchMovies = () => (dispatch: ThunkDispatch<RootState, void, any>): void => {
  fetch(moviesUrl)
    .then((response) => response.json())
    .then((moviesData: ResponseType) => {
      dispatch(setMoviesSuccess(moviesData.data));
      dispatch(setViewType(TypeOfView.movieList));
    })
    .catch((e) => {
      throw new Error(e.message);
    });
};

type ActionSetSortType = {
  type: string;
  payload: string;
};

export const setSortType = (SortType: string): ActionSetSortType => ({
  type: setSortTypeAction,
  payload: SortType,
});

type ActionSetSearchType = {
  type: string;
  payload: string;
};

export const setSearchType = (SearchType: string): ActionSetSearchType => ({
  type: setSearchTypeAction,
  payload: SearchType,
});

export const fetchMoviesBySortType = (sortType: string) => (
  dispatch: ThunkDispatch<RootState, void, ActionFetchSuccess>
): void => {
  fetch(generatedUrlBySortType(sortType))
    .then((response) => response.json())
    .then((moviesData: ResponseType) => {
      dispatch(setMoviesSuccess(moviesData.data));
    })
    .catch((e) => {
      throw new Error(e.message);
    });
};

export const fetchMoviesByGenre = (sortType: string, movieGenre: string) => (
  dispatch: ThunkDispatch<RootState, void, ActionFetchSuccess>
): void => {
  fetch(generatedUrlByGenre(sortType, movieGenre))
    .then((response) => response.json())
    .then((moviesData: ResponseType) => {
      dispatch(setMoviesSuccess(moviesData.data));
    })
    .catch((e) => {
      throw new Error(e.message);
    });
};

export const fetchMoviesByInputValue = (
  sortType: string,
  inputValue: string,
  searchType: string
) => (dispatch: ThunkDispatch<RootState, void, ActionFetchSuccess>): void => {
  fetch(generatedUrlByInputValue(sortType, inputValue, searchType))
    .then((response) => response.json())
    .then((moviesData: ResponseType) => {
      dispatch(setMoviesSuccess(moviesData.data));
    })
    .catch((e) => {
      throw new Error(e.message);
    });
};

export const fetchMovieById = (movieId: number) => (
  dispatch: ThunkDispatch<RootState, void, ActionCurrentMovie>
): void => {
  const searchURL = `${moviesUrl}/${movieId}`;
  fetch(searchURL)
    .then((response) => response.json())
    .then((movieData: MoviesDataType) => {
      dispatch(setCurrentMovie(movieData));
    })
    .catch((e) => {
      throw new Error(e.message);
    });
};
