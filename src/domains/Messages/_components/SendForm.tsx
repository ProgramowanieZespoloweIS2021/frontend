import React, { useState } from 'react';

import { Input, SendButton, Form } from './Form.styled';

interface IProps {
    onSubmit: (message: string) => void;
}

const SendForm = ({ onSubmit }: IProps) => {
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
                />
                <SendButton variant="outlined" color="primary" onClick={onSend}>
                    Send
                </SendButton>
            </Form>
        </div>
    );
};

export default SendForm;
