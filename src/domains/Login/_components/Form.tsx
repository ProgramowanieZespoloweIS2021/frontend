import React from 'react';
import { useForm } from 'react-hook-form';

import { Grid } from '@material-ui/core';

import { Container, Button, Input } from './Form.styled';

interface ILoginData {
    email: string;
    password: string;
}

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: ILoginData) => console.log(data);

    return (
        <Container container direction="column" spacing={3}>
            <Grid item>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        id="register-email-input"
                        label="Email"
                        type="email"
                        {...register('email', { required: true })}
                    />
                    <Input
                        id="register-password-input"
                        label="Password"
                        type="password"
                        {...register('password', { required: true })}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Sign in
                    </Button>
                </form>
                <Button variant="text" color="primary">
                    Forgot password?
                </Button>
            </Grid>
        </Container>
    );
};

export default Form;
