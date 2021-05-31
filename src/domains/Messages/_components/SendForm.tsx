import React from 'react';
import { useForm } from 'react-hook-form';

import { Input, SendButton, Form } from './Form.styled';

const SendForm = () => {
    const { register, handleSubmit } = useForm();

    const onSend = () => {};

    return (
        <div>
            <Form onSubmit={handleSubmit(onSend)}>
                <Input
                    id="messages-message-input"
                    label="Type message..."
                    type="text"
                    variant="outlined"
                    color="primary"
                    {...register('message')}
                />
                <SendButton variant="outlined" color="primary">
                    Send
                </SendButton>
            </Form>
        </div>
    );
};

export default SendForm;
