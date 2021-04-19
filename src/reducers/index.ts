import { combineReducers } from 'redux';
import { moviesData } from './movies-data';
import { viewTypeData } from './view-type';
import { currentMovieData } from './current-movie';
import { searchInputValueData } from './search-input-data';

export const rootReducer = combineReducers({
  moviesData,
  viewTypeData,
  currentMovieData,
  searchInputValueData,
});
