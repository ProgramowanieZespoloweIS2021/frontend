import { Action } from 'redux';
import { createReducer } from 'typesafe-actions';
import {
    createChat,
    getChatList,
    getMessages,
} from './actions';
import { ChatModule, initialState } from './module';

export const chatReducer = createReducer<ChatModule, Action>(initialState)
    .handleAction(createChat.success, (state: ChatModule, { payload }) => ({
        ...state,
        contacts: [...state.contacts, payload.data],
    }))
    .handleAction(getChatList.success, (state: ChatModule, { payload }) => ({
        ...state,
        contacts: payload.data,
    }))
    .handleAction(getMessages.success, (state: ChatModule, { payload }) => ({
        ...state,
        messages: payload.data,
    }));

