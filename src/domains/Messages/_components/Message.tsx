import React from 'react';

import { DateContainer, Container } from './Message.styled';

interface IMessage {
    message: string;

    createdAt: Date;
}

const getDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${day}.${month}.${year}`;
};

const Message = ({ message, createdAt }: IMessage) => {
    const date = new Date(createdAt);
    return (
        <Container>
            <DateContainer>
                <div>{getDate(date)}</div>
                <div>{date.toLocaleTimeString()}</div>
            </DateContainer>
            <div>{message}</div>
        </Container>
    );
};

export default Message;
