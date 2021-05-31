import React from 'react';

import { Grid, Paper } from '@material-ui/core';
import Message from './_components/Message';
import Person from './_components/Person';
import SendForm from './_components/SendForm';
import { MessagesList, PeopleList, MessagesContainer } from './MessagesPage.styled';

interface IProps {}

const PEOPLE = [{ email: 'mail@user.xd', id: 1 }, { email: 'mail@user.xd', id: 2 }];
const MESSAGES = [
    { message: 'Message number 1', createdAt: new Date() },
    { message: 'Message number 2', createdAt: new Date() },
];

const MessagesPage: React.FC<IProps> = () => {
    return (
        <>
            <Grid container justify="center" spacing={4}>
                <Grid item sm={2}>
                    <PeopleList>
                        {PEOPLE.map((person) => (
                            <Person {...person} />
                        ))}
                    </PeopleList>
                </Grid>
                <Grid item sm={8}>
                    <MessagesContainer>
                        <MessagesList>
                            {MESSAGES.map((message) => (
                                <Message {...message} />
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
