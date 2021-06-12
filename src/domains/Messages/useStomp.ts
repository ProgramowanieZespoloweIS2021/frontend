import { useState, useEffect } from 'react';
import Stomp, { Client } from 'stompjs';

interface IProps {
    topic: string;
    url: string;
    sendChannel: string;
}

interface ISendMessage {
    senderId: number;
    content: string;
    chatId: number;
}

export const useStomp = ({ url, topic, sendChannel }: IProps) => {
    const [stompClient, setStompClient] = useState<Client | null>(null);

    const onConnected = () => {
        console.log('connected');
    };

    const onError = (err: unknown) => {
        console.log(err);
    };

    const init = () => {
        const socket = new WebSocket(url);
        setStompClient(Stomp.over(socket));
    };

    const sendMessage = (data: ISendMessage) => {
        if (stompClient) {
            const message = {
                timestamp: new Date(),
                senderId: data.senderId,
                content: data.content,
                chatId: data.chatId,
            };

            stompClient.send(sendChannel, {}, JSON.stringify(message));

            return message;
        }
        return null;
    };

    const setOnMessage = (callback: any) => {
        stompClient?.subscribe(topic, callback);
    };

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        if (stompClient) {
            stompClient.connect({}, onConnected, onError);
        }
    }, [stompClient]);

    return [sendMessage, setOnMessage];
};
