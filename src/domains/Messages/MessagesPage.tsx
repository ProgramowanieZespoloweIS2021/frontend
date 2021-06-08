import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Grid } from '@material-ui/core';

import Message from './_components/Message';
import Person from './_components/Person';
import SendForm from './_components/SendForm';
import {
    MessagesList,
    PeopleList,
    MessagesContainer,
} from './MessagesPage.styled';

import * as chatSelectors from '@state/_redux/chat/selectors';
import * as userSelectors from '@state/_redux/user/selectors';
import * as chatActions from '@state/_redux/chat/actions';
import { IChat, IChatUser } from '@state/_redux/chat/module';
import { useStomp } from '@domains/Messages/useStomp';
import { addMessage } from '@state/_redux/chat/actions';

interface IProps {}

const MessagesPage: React.FC<IProps> = () => {
    const dispatch = useDispatch();
    const [selectedContact, setSelectedContact] = useState<IChat | null>(null);
    const messages = useSelector(chatSelectors.getMessages);
    const contacts = useSelector(chatSelectors.getContacts);
    const user = useSelector(userSelectors.selectUserDetails);
    const [sendStompMessage, setOnMessage] = useStomp({
        url: 'ws://localhost:8086/ws',
        topic: `/user/${user.id}/queue/messages`,
        sendChannel: '/app/chat',
    });

    useEffect(() => {
        if (user && user.id) {
            dispatch(
                chatActions.getChatList.request({
                    userId: user.id,
                    pageOffset: messages.length,
                }),
            );
        }
    }, []);

    useEffect(() => {
        if (selectedContact) {
            dispatch(
                chatActions.getMessages.request({
                    // @ts-ignore
                    chatId: selectedContact.id,
                    pageOffset: messages.length,
                }),
            );
            // @ts-ignore
            setOnMessage((data) => {
                const message = JSON.parse(data.body);
                console.log(message);
                if (message.chatId === selectedContact?.id) {
                    dispatch(
                        chatActions.getMessages.request({
                            chatId: selectedContact?.id,
                        }),
                    );
                }
            });
        }
    }, [selectedContact?.id]);

    const handleSelectContact = (contact: IChat) => {
        setSelectedContact(contact);
    };

    const handleMessageSubmit = (content: string) => {
        if (selectedContact && user && user.id) {
            const senderId = user.id;
            const chatId = selectedContact.id;
            // @ts-ignore
            const message = sendStompMessage({ content, senderId, chatId });
            if (message) {
                dispatch(addMessage(message));
            }
        }
    };

    return (
        <>
            <Grid container justify="center" spacing={4}>
                <Grid item sm={2}>
                    <PeopleList>
                        {contacts.map((c) => {
                            const contact = c.users.find(
                                (u) => u.id !== user.id,
                            ) as IChatUser;
                            return (
                                contact && (
                                    <Person
                                        email={contact.nickname}
                                        onClick={() => handleSelectContact(c)}
                                    />
                                )
                            );
                        })}
                    </PeopleList>
                </Grid>
                <Grid item sm={8}>
                    <MessagesContainer>
                        <MessagesList>
                            {messages.map((message) => (
                                <Message
                                    createdAt={message.timestamp}
                                    message={message.content}
                                />
                            ))}
                        </MessagesList>
                        <SendForm onSubmit={handleMessageSubmit} />
                    </MessagesContainer>
                </Grid>
            </Grid>
        </>
    );
};

export default MessagesPage;
