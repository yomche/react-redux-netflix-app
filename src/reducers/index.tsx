import { typeOfView } from '../constants/app.constants';
import { setViewType, setCurrentMovie } from '../actions';

export const initialState = {
  viewType: typeOfView.movieList,
  currentMovie: {},
};

export function reducer(state = initialState, action: { type: string }): Record<string, unknown> {
  switch (action.type) {
    case 'SET_VIEW_TYPE':
      console.log('action setViewType');
      break;
    case 'SET_CURRENT_MOVIE':
      console.log('action setCurrentMovie');
      break;
    default:
      console.log('');
  }
  return state;
}
