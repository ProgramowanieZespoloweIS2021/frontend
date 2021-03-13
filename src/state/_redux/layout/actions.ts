import { createAction } from 'typesafe-actions';

export const changeLockLayout = createAction(
    '@layout/CHANGE_LOCK_LAYOUT',
)<boolean>();
