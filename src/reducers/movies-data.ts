import { fetchSuccess, fetchFail } from '../actions/action-types';

const initialState = {
  posterPath: '',
  title: '',
  releaseDate: '',
  overview: '',
  id: 0,
};

export const moviesData = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case fetchSuccess:
      return action.payload;
    case fetchFail:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
