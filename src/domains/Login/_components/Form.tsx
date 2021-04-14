import React, { useState } from 'react';

import * as styled from './Form.styled';
import TextInput from './TextInput';
import Button from './Button';

export const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => setEmail(event.target.value);

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        setPassword(event.target.value);
    };

    const handleSignIn = (
        event: React.MouseEvent<HTMLButtonElement>,
    ): void => {};

    return (
        <styled.Container container direction="column" spacing={3}>
            <TextInput
                id="register-email-input"
                label="Email"
                type="email"
                onChange={handleEmailChange}
            />
            <TextInput
                id="register-password-input"
                label="Password"
                type="password"
                onChange={handlePasswordChange}
            />
            <Button variant="contained" color="primary" onClick={handleSignIn}>
                Sign in
            </Button>
            <Button variant="text" color="primary">
                Forgot password?
            </Button>
        </styled.Container>
    );
};

export default Form;
