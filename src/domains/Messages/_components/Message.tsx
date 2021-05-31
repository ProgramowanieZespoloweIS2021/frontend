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
    return (
        <Container>
            <DateContainer>
                <div>{getDate(createdAt)}</div>
                <div>{createdAt.toLocaleTimeString()}</div>
            </DateContainer>
            <div>{message}</div>
        </Container>
    );
};

export default Message;
