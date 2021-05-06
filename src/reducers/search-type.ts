import { setSearchTypeAction } from '../actions/action-names';

export const initialState = 'title';

export function searchTypeData(
  state = initialState,
  action: { type: string; payload: string }
): string {
  switch (action.type) {
    case setSearchTypeAction:
      return action.payload;
    default:
      return state;
  }
}
