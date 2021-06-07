import { Middleware, AnyAction, Dispatch } from 'redux';
import { getType } from 'typesafe-actions';
import { toast } from 'react-toastify';

import { TState } from '../../../boot/configureStore';
import {
    getMessages,
    getChatList,
    createChat,
} from '@state/_redux/chat/actions';
import { API } from '@utils/api';

const CHAT_SERVICE_URL =
    process.env.REACT_APP_CHAT_SERVICE_URL || 'http://localhost:8086';

const getMessagesRequest = async (action: AnyAction, dispatch: Dispatch) => {
    try {
        const offset = action.payload.pageOffset || 0;
        const size = action.payload.pageSzie || 15;
        const response = await API.get(
            CHAT_SERVICE_URL,
            `messages/${action.payload.chatId}?pageOffset=${offset}&pageSize=${size}`,
        );
        dispatch(getMessages.success(response));
        return true;
    } catch (err) {
        toast('Cannot fetch messages');
        dispatch(getMessages.failure(err));
        return false;
    }
};

const getChatListRequest = async (action: AnyAction, dispatch: Dispatch) => {
    try {
        const offset = action.payload.pageOffset || 0;
        const size = action.payload.pageSzie || 15;
        const response = await API.get(
            CHAT_SERVICE_URL,
            `chats/${action.payload.userId}?pageOffset=${offset}&pageSize=${size}`,
        );
        dispatch(getChatList.success(response));
        return true;
    } catch (err) {
        toast('Cannot fetch list of contacts');
        dispatch(getChatList.failure(err));
        return false;
    }
};

const createChatRequest = async (action: AnyAction, dispatch: Dispatch) => {
    try {
        const response = await API.post(
            CHAT_SERVICE_URL,
            'chats/createRoom',
            action.payload,
        );
        dispatch(createChat.success(response));
        return true;
    } catch (err) {
        dispatch(createChat.failure(err));
        return false;
    }
};

export const getMessagesMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action: AnyAction) => {
    if (action.type === getType(getMessages.request)) {
        await getMessagesRequest(action, dispatch);
    }
    return next(action);
};

export const getContactsMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action: AnyAction) => {
    if (action.type === getType(getChatList.request)) {
        await getChatListRequest(action, dispatch);
    }
    return next(action);
};

export const createChatMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action: AnyAction) => {
    if (action.type === getType(createChat.request)) {
        await createChatRequest(action, dispatch);
    }
    return next(action);
};
