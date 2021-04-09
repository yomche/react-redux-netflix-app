// bug ??
// eslint-disable-next-line no-shadow
export enum typeOfView {
  movieList = 'movieList',
  movieFullInfo = 'movieFullInfo',
}

export const moviesUrl = 'http://react-cdp-api.herokuapp.com/movies';

export type dataType = {
  data: [moviesDataType];
};

export type moviesDataType = {
  poster_path: string;
  title: string;
  release_date: string;
  genres: string;
  overview: string;
  id: number;
};

export type currentMovieType = {
  posterPath: string;
  title: string;
  releaseDate: string;
  overview: string;
  id: number;
};
