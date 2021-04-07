import { fetchSuccess, fetchFail } from '../actions/action-types';

const initialState = {
  posterPath: '',
  title: '',
  releaseDate: '',
  overview: '',
  id: 0,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const moviesData = (state = initialState, action: { type: string; payload: unknown }) => {
  switch (action.type) {
    case fetchSuccess:
      return { ...state };
    case fetchFail:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
