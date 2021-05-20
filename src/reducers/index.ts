import { combineReducers } from 'redux';
import { moviesData } from './movies-data';
import { viewTypeData } from './view-type';
import { currentMovieData } from './current-movie';
import { searchInputValueData } from './search-input-data';
import { sortTypeData } from './sort-type';
import { searchTypeData } from './search-type';
import { loadingStatusData } from './loading-status';

export const rootReducer = combineReducers({
  moviesData,
  viewTypeData,
  currentMovieData,
  searchInputValueData,
  sortTypeData,
  searchTypeData,
  loadingStatusData,
});
