import { viewType, currentMovie } from './action-types';

export function setViewType(payload: string): Record<string, unknown> {
  return { type: viewType, payload };
}

export function setCurrentMovie(payload: Record<string, unknown>): Record<string, unknown> {
  return { type: currentMovie, payload };
}
