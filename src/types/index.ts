export type MoviesDataType = {
  poster_path: string;
  title: string;
  release_date: string;
  genres: string[];
  overview: string;
  id: number;
};

export type CurrentMovieType = {
  poster_path: string;
  title: string;
  release_date: string;
  overview: string;
  id: number;
};

export type ResponseType = {
  data: MoviesDataType[];
  total: number;
  offset: number;
  limit: number;
};
