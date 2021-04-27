import { fetchSuccessAction } from '../actions/action-names';
import { DataType } from '../types';

const initialState: DataType = {
  data: [],
};

export const moviesData = (
  state = initialState,
  action: { type: string; payload: DataType }
): DataType => {
  switch (action.type) {
    case fetchSuccessAction:
      return action.payload;
    default:
      return state;
  }
};
