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
