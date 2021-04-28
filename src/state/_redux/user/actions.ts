import { createAsyncAction } from 'typesafe-actions';

export const createUser = createAsyncAction(
    'CREATE_USER_REQUEST',
    'CREATE_USER_SUCCESS',
    'CREATE_USER_FAILURE',
)<any, any, any>();

export const loginUser = createAsyncAction(
    'LOGIN_REQUEST',
    'LOGIN_SUCCESS',
    'LOGIN_FAILURE',
)<any, any, any>();

export const getUser = createAsyncAction(
    'GET_USER_REQUEST',
    'GET_USER_SUCCESS',
    'GET_USER_FAILURE',
)<any, any, any>();
