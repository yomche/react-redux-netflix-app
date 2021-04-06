import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from '../reducers/old_index';
import { rootReducer } from '../reducers';

export const store = createStore(rootReducer, composeWithDevTools());
