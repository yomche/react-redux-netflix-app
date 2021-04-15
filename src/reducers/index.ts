import { combineReducers } from 'redux';
import { moviesData } from './movies-data';
import { viewTypeData } from './view-type';
import { currentMovieData } from './current-movie';
import { formStateData } from './update-form';
import { toggleSortByData } from './toggle-sort-by';

export const rootReducer = combineReducers({
  moviesData,
  viewTypeData,
  currentMovieData,
  formStateData,
  toggleSortByData,
});
