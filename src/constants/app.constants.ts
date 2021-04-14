// bug ??
// eslint-disable-next-line no-shadow
export enum TypeOfView {
  movieList = 'movieList',
  movieFullInfo = 'movieFullInfo',
}

export const moviesUrl = 'http://react-cdp-api.herokuapp.com/movies';
export const moviesUrlSortByDate =
  'http://react-cdp-api.herokuapp.com/movies?sortBy=release_date&sortOrder=desc';
export const moviesUrlSortByRating =
  'http://react-cdp-api.herokuapp.com/movies?sortBy=vote_count&sortOrder=desc';
