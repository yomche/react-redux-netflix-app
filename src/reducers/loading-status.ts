import { setLoadingStatusAction } from '../actions/action-names';

export const initialState = true;

export function loadingStatusData(
  state = initialState,
  action: { type: string; payload: boolean }
): boolean {
  switch (action.type) {
    case setLoadingStatusAction:
      return action.payload;
    default:
      return state;
  }
}
