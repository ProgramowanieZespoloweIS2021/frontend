import { ChatModule, IChatMessage, IChat } from '@state/_redux/chat/module';

interface IProps {
    chat: ChatModule;
}

export const getMessages = ({ chat }: IProps): IChatMessage[] => chat.messages;

export const getContacts = ({ chat }: IProps): IChat[] => chat.contacts;
