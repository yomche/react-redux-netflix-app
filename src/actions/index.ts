import { viewType, currentMovie, fetchSuccess, fetchFail } from './action-types';

export function setViewType(payload: unknown): Record<string, unknown> {
  return { type: viewType, payload };
}

export function setCurrentMovie(payload: unknown): Record<string, unknown> {
  return { type: currentMovie, payload };
}

export function setMoviesSuccess(payload: unknown): Record<string, unknown> {
  return { type: fetchSuccess, payload };
}

export function setMoviesFail(payload: unknown): Record<string, unknown> {
  return { type: fetchFail, payload };
}

export const fetchMovies = () => (dispatch: (arg: Record<string, unknown>) => void): void => {
  const moviesUrl = 'http://react-cdp-api.herokuapp.com/movies';

  fetch(moviesUrl)
    .then((response) => response.json())
    .then((moviesData) => {
      dispatch(setMoviesSuccess(moviesData));
    })
    .catch((error) => dispatch(setMoviesFail(error)));
};
