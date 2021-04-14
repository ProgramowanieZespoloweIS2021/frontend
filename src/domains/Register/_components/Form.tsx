import React, { useState } from 'react';

import { Grid, FormControlLabel } from '@material-ui/core';

import * as styled from './Form.styled';
import TextInput from './TextInput';
import Button from './Button';

export const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAgreement, setTermsAgreement] = useState(false);

    const handleFirstNameChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => setFirstName(event.target.value);

    const handleLastNameChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => setLastName(event.target.value);

    const handleEmailChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => setEmail(event.target.value);

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => setPassword(event.target.value);

    const handleConfirmPasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => setConfirmPassword(event.target.value);

    const handleTermsAgreementChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => setTermsAgreement(event.target.checked);

    const handleRegister = (
        event: React.MouseEvent<HTMLButtonElement>,
    ): void => {};

    return (
        <styled.Container container direction="column" spacing={3}>
            <TextInput
                label="First name"
                type="text"
                onChange={handleFirstNameChange}
            />
            <TextInput
                label="Last name"
                type="text"
                onChange={handleLastNameChange}
            />
            <TextInput
                label="Email"
                type="email"
                onChange={handleEmailChange}
            />
            <TextInput
                label="Password"
                type="password"
                onChange={handlePasswordChange}
            />
            <TextInput
                label="Confirm password"
                type="password"
                onChange={handleConfirmPasswordChange}
            />
            <Grid item xs>
                <FormControlLabel
                    label="I agree to Terms and Privacy Policy."
                    control={
                        <styled.Checkbox
                            checked={termsAgreement}
                            onChange={handleTermsAgreementChange}
                            name="terms-agreement"
                        />
                    }
                />
            </Grid>
            <Button
                variant="contained"
                color="primary"
                onClick={handleRegister}
            >
                Create account
            </Button>
        </styled.Container>
    );
};

export default Form;
