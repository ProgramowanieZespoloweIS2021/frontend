import React, { useState } from 'react';

import { Input, SendButton, Form } from './Form.styled';

interface IProps {
    onSubmit: (message: string) => void;
    isChatSelected: boolean;
}

const SendForm = ({ onSubmit, isChatSelected }: IProps) => {
    const [content, setContent] = useState<string>('');

    const onSend = () => {
        onSubmit(content);
    };

    const handleChange = (e: any) => {
        setContent(e.target.value);
    };

    return (
        <div>
            <Form>
                <Input
                    id="messages-message-input"
                    label="Type message"
                    type="text"
                    variant="outlined"
                    color="primary"
                    onChange={handleChange}
                    disabled={!isChatSelected}
                />
                <SendButton
                    variant="outlined"
                    color="primary"
                    onClick={onSend}
                    disabled={!isChatSelected}
                >
                    Send
                </SendButton>
            </Form>
        </div>
    );
};

export default SendForm;
