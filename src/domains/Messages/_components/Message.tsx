import React from 'react';

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
        <div>
            <div>
                <div>{getDate(createdAt)}</div>
                <div>{createdAt.toLocaleTimeString()}</div>
            </div>
            <div>{message}</div>
        </div>
    );
};

export default Message;
