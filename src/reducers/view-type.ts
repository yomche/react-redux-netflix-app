import { viewType } from '../actions/action-types';

export const initialState = {
  viewType: 'movieList',
};

type viewTypePayload = {
  viewType: string;
};

export function viewTypeData(
  state = initialState,
  action: { type: string; payload: viewTypePayload }
): Record<string, unknown> {
  if (action.type === viewType) {
    return { ...state, viewType: action.payload };
  }
  return state;
}
