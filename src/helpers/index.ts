import { moviesUrl } from '../constants/app.constants';

export const generateUrlByGenre = (sortType: string, movieGenre: string): string => {
  const searchURL = `${moviesUrl}?sortBy=${sortType}&sortOrder=desc&search=${movieGenre}&searchBy=genres`;
  return searchURL;
};

export const generateUrlBySortType = (sortType: string): string => {
  const searchURL = `${moviesUrl}?sortBy=${sortType}&sortOrder=desc`;
  return searchURL;
};

export const generateUrlByInputValue = (
  sortType: string,
  inputValue: string,
  searchType: string
): string => {
  const searchURL = `${moviesUrl}?sortBy=${sortType}&sortOrder=desc&search=${inputValue}&searchBy=${searchType}`;
  return searchURL;
};

export const generateUrlById = (movieId: number): string => {
  const searchURL = `${moviesUrl}/${movieId}`;
  return searchURL;
};

export const getMovies = (): Promise<any> => {
  const movies = fetch(moviesUrl).then((response) => response.json());
  return movies;
};

export const getMoviesBySortType = (sortType: string): Promise<any> => {
  const moviesBySortType = fetch(generateUrlBySortType(sortType)).then((response) =>
    response.json()
  );
  return moviesBySortType;
};

export const getMoviesByGenre = (sortType: string, movieGenre: string): Promise<any> => {
  const moviesByGenre = fetch(generateUrlByGenre(sortType, movieGenre)).then((response) =>
    response.json()
  );
  return moviesByGenre;
};

export const getMoviesByInputValue = (
  sortType: string,
  inputValue: string,
  searchType: string
): Promise<any> => {
  const moviesByInputValue = fetch(
    generateUrlByInputValue(sortType, inputValue, searchType)
  ).then((response) => response.json());
  return moviesByInputValue;
};

export const getMovieById = (movieId: number): Promise<any> => {
  const movie = fetch(generateUrlById(movieId)).then((response) => response.json());
  return movie;
};
