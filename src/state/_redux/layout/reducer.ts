import { createReducer } from 'typesafe-actions';
import { initialState } from './module';
import { changeLockLayout } from './actions';

export default createReducer(initialState).handleAction(
    changeLockLayout,
    (state, { payload }) => ({ ...state, lockLayout: payload }),
);
