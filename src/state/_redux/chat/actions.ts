import { createAsyncAction } from 'typesafe-actions';
import { AxiosResponse } from 'axios';

import { IChat, IChatMessage, IChatUser } from "@state/_redux/chat/module";

type PayloadDefault = string;

export const createChat = createAsyncAction(
    'CREATE_CHAT_REQUEST',
    'CREATE_CHAT_SUCCESS',
    'CREATE_CHAT_FAILURE',
)<IChatUser[], AxiosResponse<IChat>, PayloadDefault>();

export const getChatList = createAsyncAction(
    'GET_CHAT_LIST_REQUEST',
    'GET_CHAT_LIST_SUCCESS',
    'GET_CHAT_LIST_FAILURE',
)<PayloadDefault, AxiosResponse<IChat[]>, PayloadDefault>();

export const getMessages = createAsyncAction(
    'GET_CHAT_MESSAGES_REQUEST',
    'GET_CHAT_MESSAGES_SUCCESS',
    'GET_CHAT_MESSAGES_FAILURE',
)<PayloadDefault, AxiosResponse<IChatMessage[]>, PayloadDefault>();
