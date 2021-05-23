import { createAsyncAction } from 'typesafe-actions';
import { AxiosResponse } from 'axios';
import { User } from '@state/_redux/user/module';
import { IRegisterData } from '@domains/Register/types';
import { ILoginData } from '@domains/Login/types';

type PayloadDefault = string;

export const createUser = createAsyncAction(
    'CREATE_USER_REQUEST',
    'CREATE_USER_SUCCESS',
    'CREATE_USER_FAILURE',
)<IRegisterData, AxiosResponse<null>, PayloadDefault>();

export const loginUser = createAsyncAction(
    'LOGIN_REQUEST',
    'LOGIN_SUCCESS',
    'LOGIN_FAILURE',
)<ILoginData, AxiosResponse<null>, PayloadDefault>();

export const getUser = createAsyncAction(
    'GET_USER_REQUEST',
    'GET_USER_SUCCESS',
    'GET_USER_FAILURE',
)<PayloadDefault, AxiosResponse<User>, PayloadDefault>();

export const logoutUser = createAsyncAction(
    'LOGOUT_USER_REQUEST',
    'LOGOUT_USER_SUCCESS',
    'LOGOUT_USER_FAILURE',
)<null, AxiosResponse<null>, null>();
