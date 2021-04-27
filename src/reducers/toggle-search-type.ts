import { toggleBySearchTypeAction } from '../actions/action-names';

export const initialState = 'title';

export function toggleSearchTypeData(
  state = initialState,
  action: { type: string; payload: string }
): string {
  switch (action.type) {
    case toggleBySearchTypeAction:
      return action.payload;
    default:
      return state;
  }
}
