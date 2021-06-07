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
    id: number;
    chatId: number;
    content: string;
    timestamp: Date;
    messageStatus: string;
    senderId: number;
    recipientsIds: null;
}

export interface ChatModule {
    messages: IChatMessage[];
    contacts: IChat[];
}

export const initialState: ChatModule = {
    messages: [],
    contacts: [],
};
