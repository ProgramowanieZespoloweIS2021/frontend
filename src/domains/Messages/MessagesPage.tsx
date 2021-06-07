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
import * as chatActions from '@state/_redux/chat/actions';
import { IChatUser } from '@state/_redux/chat/module';

interface IProps {}

const MessagesPage: React.FC<IProps> = () => {
    const userId = 1;
    const dispatch = useDispatch();
    const [selectedContact, setSelectedContact] = useState<number | null>(null);
    const messages = useSelector(chatSelectors.getMessages);
    const contacts = useSelector(chatSelectors.getContacts);

    useEffect(() => {
        dispatch(
            chatActions.getChatList.request({
                userId,
                pageOffset: messages.length,
            }),
        );
    }, []);

    useEffect(() => {
        if (selectedContact) {
            dispatch(
                chatActions.getMessages.request({
                    // @ts-ignore
                    chatId: selectedContact,
                    pageOffset: messages.length,
                }),
            );
        }
    }, [selectedContact]);

    const handleSelectContact = (contactId: number) => {
        setSelectedContact(contactId);
    };

    return (
        <>
            <Grid container justify="center" spacing={4}>
                <Grid item sm={2}>
                    <PeopleList>
                        {contacts.map((c) => {
                            const contact = c.users.find(
                                (u) => u.id !== userId,
                            ) as IChatUser;
                            return (
                                <Person
                                    email={contact.nickname}
                                    onClick={() =>
                                        handleSelectContact(contact.id)
                                    }
                                />
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
                        <SendForm />
                    </MessagesContainer>
                </Grid>
            </Grid>
        </>
    );
};

export default MessagesPage;
