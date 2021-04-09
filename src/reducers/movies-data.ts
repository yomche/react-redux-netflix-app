import { fetchSuccess } from '../actions/action-types';
import { dataType } from '../constants/app.constants';

const initialState: dataType = {
  data: [{ poster_path: '', title: '', release_date: '', genres: '', overview: '', id: 0 }],
};

export const moviesData = (
  state = initialState,
  action: { type: string; payload: dataType }
): dataType => {
  switch (action.type) {
    case fetchSuccess:
      return action.payload;
    default:
      return state;
  }
};
