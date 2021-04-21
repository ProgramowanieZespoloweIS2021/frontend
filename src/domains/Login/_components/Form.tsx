import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Grid } from '@material-ui/core';

import { Container, Button, Input } from './Form.styled';

interface IProps {}

interface ILoginData {
    email: string;
    password: string;
}

const schema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
});

const Form: React.FC<IProps> = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data: ILoginData) => console.log(data);

    return (
        <Container container direction="column" spacing={3}>
            <Grid item>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        error={!!errors.email}
                        helperText={errors.email && errors.email.message}
                        id="login-email-input"
                        label="Email"
                        type="email"
                        variant="outlined"
                        {...register('email')}
                    />
                    <Input
                        error={!!errors.password}
                        helperText={errors.password && errors.password.message}
                        id="login-password-input"
                        label="Password"
                        type="password"
                        variant="outlined"
                        {...register('password')}
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
