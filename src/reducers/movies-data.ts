import { fetchSuccessAction, searchMovieByParametersAction } from '../actions/action-names';
import { DataType } from '../types';

const initialState: DataType = {
  data: [{ poster_path: '', title: '', release_date: '', genres: '', overview: '', id: 0 }],
};

export const moviesData = (
  state = initialState,
  action: { type: string; payload: DataType }
): DataType => {
  switch (action.type) {
    case fetchSuccessAction:
      return action.payload;
    case searchMovieByParametersAction:
      return action.payload;
    default:
      return state;
  }
};
