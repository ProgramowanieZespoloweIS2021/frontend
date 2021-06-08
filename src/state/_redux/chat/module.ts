export interface IChatUser {
    id: number;
    nickname: string;
}

export interface IChat {
    id: number;
    users: IChatUser[];
    lastActivityDate: string;
}

export interface IChatMessage {
    id?: number;
    chatId: number;
    content: string;
    timestamp: Date;
    messageStatus?: string;
    senderId: number;
    recipientsIds?: null;
}

export interface IGetContactsRequestPayload {
    userId: number;
    pageOffset?: number;
    pageSize?: number;
}

export interface IGetMessagesRequestPayload {
    chatId: number;
    pageOffset?: number;
    pageSize?: number;
}

export interface ChatModule {
    messages: IChatMessage[];
    contacts: IChat[];
}

export const initialState: ChatModule = {
    messages: [],
    contacts: [],
};
