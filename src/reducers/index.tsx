import { typeOfView } from '../constants/app.constants';

export const initialState = {
  viewType: typeOfView.movieList,
  currentMovie: {},
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any }
): Record<string, unknown> {
  switch (action.type) {
    case 'SET_VIEW_TYPE':
      console.log('action setViewType');
      return { ...state, viewType: action.payload };
    case 'SET_CURRENT_MOVIE':
      console.log('action setCurrentMovie');
      return { ...state, currentMovie: action.payload };
    default:
      return state;
  }
}
