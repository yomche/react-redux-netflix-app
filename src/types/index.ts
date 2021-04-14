export type DataType = {
  data: [MoviesDataType];
};

export type MoviesDataType = {
  poster_path: string;
  title: string;
  release_date: string;
  genres: string;
  overview: string;
  id: number;
};

export type CurrentMovieType = {
  posterPath: string;
  title: string;
  releaseDate: string;
  overview: string;
  id: number;
};
